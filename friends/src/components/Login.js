import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: '',
                password: ''
            },
            isLoading: false
        }
    };

    handleChange = e => {
       this.setState({
           credentials: {
               ...this.state.credentials,
            [e.target.name]: e.target.value   
           }
       })
    }

    login = e => {
        e.preventDefault();
        this.setState({
            isLoading: true
        })
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected')
        })
        .catch(err => console.log('Data returned an error', err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login} >
                    <label htmlFor="username">Username:
                        <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username} 
                        onChange={this.handleChange} />
                    </label>

                    <label htmlFor="password">Password:
                        <input 
                        type="text"
                        name="password"
                        value={this.state.credentials.password} 
                        onChange={this.handleChange} />
                    </label>
                    <button>Login</button>
                    {this.state.isFetching && 'logging in'}
                </form>
            </div>
        );
    }
}

export default Login;
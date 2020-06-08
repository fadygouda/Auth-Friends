import React, { Component } from 'react';
import Friend from './Friends';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AddFriendForm from '../components/AddFriendForm'

class Friends extends Component {
    state = {
        friends: [] 
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth().get('/api/friends')
        .then(res => {
            this.setState({
                friends: res.data
            })
        }) 
        .catch(err => console.log(err)) 
    }

    addFriend = friend => {
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', JSON.parse(JSON.stringify(friend)))
            .then(res => {
                this.getData();
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <h1>Friends</h1>
              {this.state.friends.map(friend => (
                  <Friend 
                  name={friend.name}
                  age={friend.age}
                  email={friend.email} />
              ))}

                
                <AddFriendForm addFriend={this.addFriend} />


            </div>
        );
    }
}

export default Friends; 
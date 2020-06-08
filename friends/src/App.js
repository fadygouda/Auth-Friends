import React from 'react';
import { Link, Switch, Route} from 'react-router-dom'
import {PrivateRoute} from './components/PrivateRoute'
import Login from './components/Login'
import FriendsList from './components/FriendsList'

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/friends'>Friends Page</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute path='/protected' component={FriendsList} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;

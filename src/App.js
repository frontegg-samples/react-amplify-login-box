import React from 'react';
import { useAuth } from '@frontegg/react'
import {useHistory} from "react-router-dom";

function App() {
  const { user, isAuthenticated } = useAuth();
  const history = useHistory();
  // const { user, isAuthenticated } = useAuth(); // Use this to avoid redirect to /account/login

  return (
      <div className='App'>
        {isAuthenticated ? (
          <div>
            <div>
              <img src={user?.profilePictureUrl} alt={user?.name}/>
            </div>
            <div>
              <span>Logged in as: {user?.name}</span>
            </div>
            <div>
              <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
            </div>
            <div>
              <button onClick={() => history.push('/account/logout')}>Click me to logout</button>
            </div>
          </div>
        ) : (
          <div>
            <h1>Please login</h1>
            <button onClick={() => {
              history.push('/account/login');
            }}>Login</button>
          </div>
        )}

      </div>
  );
}

export default App;

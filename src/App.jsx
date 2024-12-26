import React from 'react'
import UserList from './components/UserList';
import Users from "./assets/users.json"
import appStyles from "./App.module.css"

function App() {

    return (
      <>
        <h1 className={appStyles.heading}>Users</h1>
        <div className={appStyles.wrapper}>
          {Users.length > 0 &&
            Users.map((user, index) => {
              return <UserList data={user} key={index} />;
            })}
        </div>
      </>
    );
}

export default App
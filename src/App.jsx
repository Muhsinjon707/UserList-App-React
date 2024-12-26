import React from 'react'
import UserList from './components/UserList';
import Users from "./assets/users.json"

function App() {

    return (
        <>
        <h1>Users</h1>
        <div className="wrapper">
            {
                Users.length > 0 && Users.map((user, index) => {
                    return <UserList data={user} key={index} />
                })
            }
        </div>
        </>
    );
}

export default App
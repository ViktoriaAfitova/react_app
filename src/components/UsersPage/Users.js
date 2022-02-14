import React, {useState} from 'react';
import UserList from "./UserList";
import UserAdd from "./UserAdd";

const Users = () => {
    const [users, setUsers] = useState([
        {
            name: 'Franko',
            age: 32,
            country: "USA"
        },
        {
            name: 'Mikolo',
            age: 43,
            country: "Italy"
        },
        {
            name: 'Petro',
            age: 20,
            country: "Russia"
        },

    ]);
    return (
        <>
            <UserList users={users}/>
            <UserAdd users = {users} setUsers = {setUsers}/>
        </>
    );
};

export default Users;
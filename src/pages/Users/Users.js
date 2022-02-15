import React, {useState} from 'react';
import UserAdd from './UserAdd';
import UserList from './UserList';

const Users = () => {
    const [users, setUsers] = useState([
        // {
        //     name: 'Franko',
        //     age: 32,
        //     country: "USA"
        // },
        // {
        //     name: 'Mikolo',
        //     age: 43,
        //     country: "Italy"
        // },
        // {
        //     name: 'Petro',
        //     age: 20,
        //     country: "Russia"
        // },

    ]);
    return (
        <div className='container'>
            <UserAdd users = {users} setUsers = {setUsers}/>
            <UserList users={users}/>
        </div>
    );
};

export default Users;
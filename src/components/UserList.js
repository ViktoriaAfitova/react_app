import React from 'react';

const UserList = ({ users }) => {
    return users.map((user, index) =>
        <div key={index}>
            <div>Name: {user.name}</div>
            <div>Age: {user.age}</div>
            <div>Country: {user.country}</div>
        </div>)
}

export default UserList;


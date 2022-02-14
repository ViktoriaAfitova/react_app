import React from 'react';

const UserList = ({ users }) => {
    return users.map((user, index) =>
        <div className={'userList'} key={index}>
            <div className={'name'}><span>Name:</span> {user.name}</div>
            <div className={'age'}><span>Age:</span> {user.age}</div>
            <div className={'country'}><span>Country:</span> {user.country}</div>
        </div>)
}

export default UserList;


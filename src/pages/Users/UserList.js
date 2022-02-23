import React from 'react';
import MyButton from '../../components/UI/button/MyButton';

const UserList = ({ users, setUsers }) => {

    const deleteUser = (name) => {
        const confirm = window.confirm('Do you really want to delete it?')
        if (confirm) {
            console.log(name)
        setUsers(users.filter((user) => user.name !== name))
        }
    }

    return (
    <table className="table table-info mt-4">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Country</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
        {users.map((user, index) =>
            <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.country}</td>
            <td><MyButton action={() => deleteUser(user.name)}>Delete</MyButton></td>
            </tr>
        )}
        </tbody>
    </table>
    )
}

export default UserList;


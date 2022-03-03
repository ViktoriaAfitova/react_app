import React, { useContext } from 'react';
import MyButton from '../../components/UI/button/MyButton';
import { Link } from 'react-router-dom';
import div from './userList.css';

const UserList = ({ users, setUsers }) => {
	const deleteUser = (name) => {
    const confirm = window.confirm('Do you really want to delete it?')
    if (confirm) {
    setUsers(users.filter((user) => user.name !== name))
    }
  }

  return (
  	<table className="table table-info mt-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">City</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) =>
          <tr key={index}>
          	<th scope="row"><Link className='nav-link' to={`/users/${user.id}`}>{user.id}</Link></th>
          	<td>{user.name}</td>
          	<td>{user.username}</td>
          	<td>{user.address.city}</td>
          	<td><MyButton action={() => deleteUser(user.name)}>Delete</MyButton></td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default UserList;


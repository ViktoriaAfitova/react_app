import React, { useContext } from 'react';
import MyButton from '../../components/UI/button/MyButton';
import { Link } from 'react-router-dom';
import './userList.css';
import Crud from '../../services/crud.service';
import { deleteUser } from '../../reducer/reducer';
import Context from '../../context/context';

const UserList = ({ users, setUsers }) => {
  const usersCrud = new Crud('users')
  const {state, dispatch} = useContext(Context)
  console.log(users)

	const removeUser = (id) => {
    dispatch(deleteUser(id))
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
          	<td></td>
            {/* {user.address.city}  */}
          	<td><MyButton action={() => removeUser(user.id)}>Delete</MyButton></td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default UserList;


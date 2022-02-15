import React from 'react';

const UserList = ({ users }) => {
    return (
    <table className="table table-info mt-4">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Country</th>
            </tr>
        </thead>
        <tbody>
        {users.map((user, index) =>
            <tr>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.country}</td>
            </tr>

        )}
  </tbody>
</table>



    )
}

export default UserList;


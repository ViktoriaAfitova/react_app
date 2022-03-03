import React, { useState } from "react";
import MyModal from "../../components/MyModal/MyModal";
import UserAdd from "./UserAdd";
import UserList from "./UserList";

const Users = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => setUsers(users))
		console.log(users)

  return (
    <div className="container">
      <UserList users={users} setUsers={setUsers} />
      <button className="btn btn-secondary" onClick={() => setShowModal(true)}>
        Add User
      </button>
      <MyModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        closeBtnShow
      >
        <UserAdd
          users={users}
          setUsers={setUsers}
          action={UserAdd}
          closeModal={() => setShowModal(false)}
        />
      </MyModal>
    </div>
  );
};

export default Users;

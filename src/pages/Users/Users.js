import React, { useEffect, useState, useContext } from "react";
import MyModal from "../../components/MyModal/MyModal";
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import Context from "../../context/context";
import Crud from "../../services/crud.service";
import { setUsers } from "../../reducer/reducer";

const Users = () => {
  const usersCrud = new Crud("users");
  const [showModal, setShowModal] = useState(false);
  // const [users, setUsers] = useState([]);
  const { state, dispatch } = useContext(Context);

  const getUsers = () => {
    usersCrud.getAll().then((res) => {
      dispatch(setUsers(res.data));
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  // fetch("https://jsonplaceholder.typicode.com/users")
  // 	.then(response => response.json())
  // 	.then(users => setUsers(users))
  // 	console.log(users)

  return (
    <div className="container">
      <UserList users={state.users} />
      <button className="btn btn-secondary" onClick={() => setShowModal(true)}>
        Add User
      </button>
      <MyModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        closeBtnShow
      >
        <UserAdd
          users={state.users}
          setUsers={dispatch}
          action={UserAdd}
          closeModal={() => setShowModal(false)}
        />
      </MyModal>
    </div>
  );
};

export default Users;

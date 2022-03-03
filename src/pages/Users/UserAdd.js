import React, { useState } from "react";
import MyButton from "../../components/UI/button/MyButton";
import Crud from "../../services/crud.service";

const UserAdd = ({ users, setUsers, closeModal }) => {
  const usersCrud = new Crud("users");
  const onChange = (e) => {
    const field = e.target.id;
    setValues({ ...values, [field]: e.target.value });
  };

  const addNewUser = (id) => {
    usersCrud.create(id, values).then((res) => {
      setUsers([...users, values]);
      setValues({
        name: "",
        age: "",
        city: "",
      });
      closeModal(false);
    });
  };

  const [values, setValues] = useState({
    name: "",
    age: "",
    country: "",
  });

  return (
    <>
      {Object.keys(values).map((value, index) => {
        if (value === "age") {
          return (
            <input
              className={"user_input"}
              id={value}
              key={index}
              value={values[value]}
              type={values[value]}
              placeholder={`Input your ${value}`}
              onChange={onChange}
            />
          );
        }
        return (
          <input
            className={"user_input"}
            id={value}
            key={index}
            value={values[value]}
            placeholder={`Input your ${value}`}
            onChange={onChange}
          />
        );
      })}
      <MyButton action={addNewUser}>Add new user</MyButton>
    </>
  );
};

export default UserAdd;

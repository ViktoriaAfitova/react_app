import React, { useState, useContext } from "react";
import MyButton from "../../components/UI/button/MyButton";
import Crud from "../../services/crud.service";
import { addUser } from "../../reducer/reducer";
import Context from "../../context/context";

const UserAdd = ({ closeModal }) => {
  const {state, dispatch} = useContext(Context)
  const usersCrud = new Crud("users");
  const onChange = (e) => {
    const field = e.target.id;
    setValues({ ...values, [field]: e.target.value });
  };

  const addNewUser = () => {
    usersCrud.create(values).then((res) => {
      dispatch(addUser(res.data))
      setValues({
        name: "",
        age: "",
        city: "",
      });
      closeModal(false);
    })
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

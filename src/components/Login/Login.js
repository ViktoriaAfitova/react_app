import React, { useState, useContext } from "react";
import AuthContext from "../../context/context";

const Login = () => {
	const { auth, setAuth } = useContext(AuthContext); // auth.session, setAuth.name
	const [values, setValues] = useState({login:'', password: ''});

	const onChange = (e) => {
		const field = e.target.id;
			setValues({...values, [field]:e.target.value})
	}
	console.log(values)

	const login = () => {
		const user = {login: 'test@gmail.com', password: '12345'}
		if (values.password === user.password && values.login === user.login) {
			return setAuth(true)
		}
	}

  return (
    <form className="container mt-5 col-4">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
					id="login"
					onChange={onChange}
        ></input>
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
					onChange={onChange}
        ></input>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
					onChange={onChange}
        ></input>
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={login}>
        Submit
      </button>
    </form>
  );
};

export default Login;

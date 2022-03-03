import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/context";
import { LOGOUT } from "../reducer/reducer";

const NavBar = () => {
  const [toggler, setToggler] = useState(false);
  const { state, dispatch } = useContext(AuthContext);
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Users",
      link: "/users",
    },
    {
      name: "Photos",
      link: "/photos",
    },
    {
      name: "Posts",
      link: "/posts",
    },
  ];
  const toggleMenu = () => {
    setToggler(!toggler);
  };

  const logout = () => {
    dispatch({type: LOGOUT, data: null });
    window.localStorage.clear();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          onClick={() => setToggler(true)}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            setToggler ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <Link to={link.link} className="nav-link" onClick={toggleMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {state.auth ? (
          <button className="btn btn-outline-secondary" onClick={logout}>
            LogOut
          </button>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default NavBar;

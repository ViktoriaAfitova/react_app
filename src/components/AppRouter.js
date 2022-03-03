import React, {useContext} from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../pages/Users/Users";
import Posts from "../components/Posts/Posts";
import UserEdit from "../pages/Users/UserEdit";
import NotFound from "../pages/NotFound";
import AuthContext from "../context/context";
import Login from "./Login/Login";

const AppRouter = () => {
  const {state} = useContext(AuthContext);
  return (
    state.auth ?
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserEdit />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    :
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>

  );
};

export default AppRouter;

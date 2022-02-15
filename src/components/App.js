// import UserList from "./UsersPage/UserList";
// import {users} from './UsersPage/Users';
// import UserAdd from "./UsersPage/UserAdd"

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      {/* <UserList users={users}/>
      <UserAdd /> */}
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
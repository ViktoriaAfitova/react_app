import UserList from "./UserList";
import {users} from '../users';
import UserAdd from "../UserAdd";

const App = () => {

  return (
    <div className="App">
      <UserList users={users}/>
      <UserAdd />
    </div>
  );
}

export default App;
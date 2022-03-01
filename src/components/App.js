import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from '../context/context';
import { useState } from 'react';

const App = () => {
  const [auth, setAuth] = useState(false); // {false = session: false, name: ''}

  return (
    <AuthContext.Provider value={{
      auth,
      setAuth
    }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <AppRouter />
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
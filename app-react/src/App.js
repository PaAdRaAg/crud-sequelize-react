import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import UsersList from './components/UsersList';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = () => {
      fetch('http://localhost:3001/api/users')
      .then(res => res.json())
      .then(res => setUsers(res))
    }
    getUsers()
  }, [])

  return (
    <Fragment>
      <Navbar brand='CRUD Sequelize,React and Node App'/>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Lista de Usuarios</h2>
            <UsersList users={users}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Agragar Usuario</h2>

          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;

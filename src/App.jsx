
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import UserTable from './components/UserTable';
import { useState,useEffect } from 'react';
function App() {
  const [users, setUsers] = useState([]);

  // Fetching happens here at the top level
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <NavBar totalUsers={users.length} />
      
      <div className="container mt-4">
        {/* Pass the users array down to UserTable */}
        <UserTable users={users} setUsers={setUsers} />
      </div>
    </>
  )
}

export default App

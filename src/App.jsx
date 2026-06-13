import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import UserTable from './components/UserTable';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Track search query globally

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDeleteUser=(idToDelete)=>{
  const updatedUsersList= users.filter(user=>user.id !== idToDelete);
  setUsers(updatedUsersList);
  }
  return (
    <div>
     
      <NavBar 
        totalUsers={filteredUsers.length} 
        onSearchChange={setSearchTerm} 
      />
      
      <div className="container mt-4">
        <UserTable users={filteredUsers} onDelete={handleDeleteUser}/>
      </div>
    </div>
  );
}
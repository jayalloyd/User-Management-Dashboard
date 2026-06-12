import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from "react";
export default function UserTable() {
 
const [users,setUsers]=useState([]);

useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response =>response.json())
       .then(data=> setUsers(data));



},[]);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>

                </tr>
            </thead>
            <tbody>
              
  {users && users.map((user, index) => (
    <tr key={user.id}>
      {/* Displays 1, 2, 3... based on list order, or use user.id */}
      <td>{index + 1}</td> 
      
      {/* Lowercase 'name' and 'email' matches the API data */}
      <td>{user.name}</td>
      <td>{user.email}</td>
      
      <td>
        <Button variant="danger" size="sm">
          Delete
        </Button>
      </td>
    </tr>
  ))}

            </tbody>
        </Table>




    )
}
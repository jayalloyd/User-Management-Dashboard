import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

// Accept users as a prop
export default function UserTable({ users,onDelete }) {

  const handleDelete=(idToDelete)=>{
    
    onDelete(idToDelete);
  };
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td> 
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
        
              <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
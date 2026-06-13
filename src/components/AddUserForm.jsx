import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function AddUserForm({ onAdd }) {
    const [name,setName]=useState('');
    const[email,setEmail]=useState('');
    const handleAddUser=(e)=>
    {
    e.preventDefault();
     if(!name.trim() || ! email.trim()){
        alert('add both the fields');
        return;
     }
      onAdd(name,email);
      setName('');
      setEmail('');
    };
    return(
      <Form onSubmit={handleAddUser}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Add User</Form.Label>
        <Form.Control type="name" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
        <Form.Text className="text-muted">
          Enter your details please...!!!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    )}
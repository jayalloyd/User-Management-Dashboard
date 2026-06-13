import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';

export default function NavBar({ totalUsers, onSearchChange }) {
  const handleSearch = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <Navbar bg="success" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faUser} className="me-2" />
          User Management System
        </Navbar.Brand>
   
        <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            type="search"
            placeholder="Search users..."
            className="me-2"
            aria-label="Search"
            onChange={handleSearch} 
          />
        </Form>

        <Nav className="ms-auto">
          <Nav.Link disabled style={{ color: '#fff', fontWeight: 'bold' }}>
            Total Users: {totalUsers}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
// Accept totalUsers from App.jsx props
export default function NavBar({ totalUsers }) {
  return (
    <Navbar bg="success" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faUser} className="me-2" />
          User Management System
        </Navbar.Brand>
       <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        <Nav className="ms-auto">
          {/* Display the dynamic count here */}
          <Nav.Link disabled style={{ color: '#fff', fontWeight: 'bold' }}>
            Total Users: {totalUsers}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
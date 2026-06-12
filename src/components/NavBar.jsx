import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
export default function NavBar() {

  return (


    <Navbar bg="success" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" ><FontAwesomeIcon icon={faUser} />User Management System</Navbar.Brand>

        <Nav className="me-1">

          <Nav.Link >Total Users</Nav.Link>
        </Nav>
      </Container>
    </Navbar>




  )


}
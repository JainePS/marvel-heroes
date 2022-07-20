import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import "../components/navBar.css"


export function NavBarApp() {
  return (
    <Navbar bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Marvel - Heroes list</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="me-auto">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
      </Container>
    </Navbar>
  );
}


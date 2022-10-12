import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Informacion from './Informacion';
import Inicio from './Inicio';
import Contacto from './Contacto';
// import Button from './Button';

function BasicExample() {
  return (
    // <Router>
    <Navbar bg="light" variant={"light"}>
      <Container>
        <Navbar.Brand href="#home">MOREA SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {/* <Button variant="outline-primary">Primary</Button>{' Carrito '} */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/Inicio"}>Inicio</Nav.Link>
            <Nav.Link as={Link} to={"/Informacion"}>Informacion</Nav.Link>
            <Nav.Link as={Link} to={"/Contacto"}>Contacto</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Golosinas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Accesorios
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Salud</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Nosotros
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
/* <BrowserRouter>
    <Routes>
          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path=":/Informacion" element={<Informacion/>} />
          <Route path=":/Contacto" element={<Contacto/>} />
      </Routes>
      </BrowserRouter>
    </Router> */
};

export default BasicExample;
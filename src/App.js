
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
import Home from './mycomponent/home'
import About from './mycomponent/About'
import Contact from './mycomponent/contact'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import './App.css';

function App() {
  return (

    <div className="App">
    
     <Router>
       <Navbar bg="dark" expand="lg" variant='dark'>
      <Container fluid>
        
        <Navbar.Brand href="#">Dream Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route exact path = "/about" element ={<About/>}></Route>
      <Route exact path = "/" element ={ <Home/> }></Route>
     
      <Route exact path = "/contact" element ={<Contact/>}></Route>
      
   
    </Routes>
    </Router>
      
    </div>
  );

   
}



export default App;


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
import { IoLocationOutline} from "react-icons/io5";
import { GrMail} from "react-icons/gr";
import { BsTelephoneInboundFill} from "react-icons/bs";



import './App.css';

function App() {
  return (

    <div className="App">
    
     <Router>
       <Navbar bg="dark" expand="lg" variant='dark' className='navbar'>
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
    
    <div className="bottom_nav">
    <div className="container-fluid">
     <div className="container">
      <div className="bottom_nav_blocks">
        <div className="row">
          <div className="col-lg-4">
            <h3>ABOUT US</h3>
            <div className="bottom_nav_about_content">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam velit atque eum consequatur commodi tempora earum maxime perferendis doloremque! Perspiciatis ut porro quas facilis atque, sit molestiae inventore doloremque quae!
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <h3>GET IN TOUCH</h3>
            <div className="bottom_nav_get_in_touch_content">
              
              <div className="row">
              <div className="col-lg-3">
                <div className="bottom_nav_get_in_touch_content_icons">
<IoLocationOutline />
</div>
              </div>
              <div className="bottom_nav_get_in_touch_content_data col-lg-9">
Dream-Home , shop no -409, MC Complex, Circular road ,Near Aggarsen Chowk, Rewari -123401 (HR)
              </div>
              {/* </div> */}
              {/* <div className="row"> */}
              <div className="col-lg-3">
              <div className="bottom_nav_get_in_touch_content_icons">
< GrMail/>
</div>
              </div>
              <div className="bottom_nav_get_in_touch_content_data col-lg-9">
<p> <a href="mailto:dkhanna33158@gmail.com"> dkhanna33158@gmail.com </a></p>
              </div>
              {/* </div> */}
              {/* <div className="row"> */}
              <div className="col-lg-3">
              <div className="bottom_nav_get_in_touch_content_icons">
              <BsTelephoneInboundFill/>
              </div>
              </div>
              <div className="bottom_nav_get_in_touch_content_data col-lg-9">
<p> <a href="tel:7404145334"> 7404145334</a></p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h3>OPENING HOURS</h3>
            <div className="nav_bottom_opening_hours_content">
              <ol>
                <li>Our support 24 / 7</li>
                <li>Monday – Friday: 9am-6pm</li>
                <li>Saturday: 10am-4pm</li>
                <li>Sunday: 10am-1pm</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
     </div>
      </div>
    </div>
    </div>
  );

   
}



export default App;

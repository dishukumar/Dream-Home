
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
import Home from './mycomponent/home'
import About from './mycomponent/About'
import Contact from './mycomponent/contact'
import Services from './mycomponent/services'
<<<<<<< HEAD
import Valuer from './mycomponent/valuer'
=======
import Exterior_design from './mycomponent/Exterior_design'
import Layout_plan from './mycomponent/Layout_plan'
>>>>>>> 822bdfd0f6fc47687fd9ff9e8fdc377ccf2e2467
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoLocationOutline} from "react-icons/io5";
import { GrMail} from "react-icons/gr";
import { BsTelephoneInboundFill} from "react-icons/bs";
import  { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



import './App.css';


function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [login, setLogin] = useState(false);
  
  const handleClose = () => setLogin(false);
  const handleShow = () => setLogin(true);

  const [signup, setSignup] = useState(false);
   const handClose = () => setSignup(false);
  const handShow = () => setSignup(true);

  const CollectData = async  () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5400/Login", {
      method: "post",
      body: JSON.stringify({email,password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);

   };

   const Data = async ()=>{
    console.log(name, email, password, confirmPassword)
    let result = await fetch("http://localhost:5400/Signup", {
      method: "post",
      body: JSON.stringify({ name, email, password, confirmPassword }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
   }

  return (

    <div className="App">
    
     <Router>
       <Navbar bg="dark" expand="lg" variant='dark' className='navbar' sticky="top">
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
            <Nav.Link href="/services">Services</Nav.Link>
            {/* <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Architect</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Civil Engineer</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Interior Design</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Vastu Consultant</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Floor plan</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
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
          <Button variant="outline-primary" onClick={handleShow}>
        Login
      </Button>
          <Button variant="outline-primary" onClick={handShow}>
        Signup
      </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route exact path = "/about" element ={<About/>}></Route>
      <Route exact path = "/" element ={ <Home/> }></Route>
      <Route exact path = "/services" element ={ <Services/> }></Route>
<<<<<<< HEAD
      <Route exact path = "/valuer" element ={ <Valuer/> }></Route>
=======
      <Route exact path = "/exterior_design" element ={ <Exterior_design/> }></Route>
      <Route exact path = "/layout" element ={ <Layout_plan/> }></Route>
     
>>>>>>> 822bdfd0f6fc47687fd9ff9e8fdc377ccf2e2467
      <Route exact path = "/contact" element ={<Contact/>}></Route>
  >
   
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
    
    {/* login section */}
    <div>
        <Modal show={login} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus value={email}  onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='*******' value={password}  onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{CollectData(); handleClose()}}>
          Login
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      {/* end of login section */}

{/* signup section */}
    <div>
        <Modal show={signup} onHide={handClose}>
        <Modal.Header closeButton>
          <Modal.Title>SIGNUP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Rocky"
                autoFocus value={name}  onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}  onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="********"
                value={password}  onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="********"
                value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)}
                
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{Data(); handClose()}}>
            Signup
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      {/* end signup section */}
    </div>
  );

   
}



export default App;

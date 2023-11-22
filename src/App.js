
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
import Home from './mycomponent/home'
import About from './mycomponent/About'
import Contact from './mycomponent/contact'
import Services from './mycomponent/services'
import Architect from'./mycomponent/Architect'
import Building_plan_approval from './mycomponent/building_plan_approval';
import Interior_Design from './mycomponent/interior_design'
import Bed_Room from './mycomponent/bed_room'
import Drawing_room from './mycomponent/Drawing_room';
import Pooja_room from './mycomponent/Pooja_room';
import Kitchen_room from './mycomponent/Kitchen_room';
import Commercial_room from './mycomponent/Commercial_room';
import Office_room from './mycomponent/Office_room';
import Valuer from './mycomponent/valuer'
import Exterior_design from './mycomponent/Exterior_design'
import Layout_plan from './mycomponent/Layout_plan'
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
// whatsapp widget
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
// scroll to top
import ScrollToTop from "react-scroll-to-top";
import { useAuth0 } from "@auth0/auth0-react";

import './App.css';


function App() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
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
        
        <Navbar.Brand href="#"> <img src="/img/logo/logo.png" alt="" height="50px"/> </Navbar.Brand>
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
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          {/* <Button variant="outline-primary" onClick={handleShow}>
        Login
      </Button> */}
     {
        isAuthenticated && (
          <div>
            {/* <img src={user.picture} alt={user.name} /> */}
            {/* <h2>{user.name}</h2> */}
            <Button variant="outline-primary"> Welcome {user.email}</Button>
          </div>
        )
      }
      {
      isAuthenticated ?(
        <Button variant="outline-primary" style={{margin:"10px"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
      )
      //     {/* <Button variant="outline-primary" onClick={handShow}>
      //   Signup
      // </Button> */}
      :(
      <Button variant="outline-primary" onClick={() => loginWithRedirect()}>Log In</Button>
    )
}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route exact path = "/about" element ={<About/>}></Route>
      <Route exact path = "/" element ={ <Home/> }></Route>
      <Route exact path = "/services" element ={ <Services/> }></Route>
      <Route exact path = "/valuer" element ={ <Valuer/> }></Route>
      <Route exact path = "/exterior_design" element ={ <Exterior_design/> }></Route>
      <Route exact path = "/layout" element ={ <Layout_plan/> }></Route>
      <Route exact path = "/contact" element ={<Contact/>}></Route>
      <Route exact path = "/architect" element ={<Architect/>}></Route>
      <Route exact path = "/building_plan_approval" element ={<Building_plan_approval/>}></Route>
      <Route exact path = "/interior_design" element ={<Interior_Design/>}></Route>
      <Route exact path = "/bed_room" element ={<Bed_Room/>}></Route>
      <Route exact path = "/Drawing_room" element ={<Drawing_room/>}></Route>
      <Route exact path = "/Pooja_room" element ={<Pooja_room/>}></Route>
      <Route exact path = "/Kitchen_room" element ={<Kitchen_room/>}></Route>
      <Route exact path = "/Commercial_room" element ={<Commercial_room/>}></Route>
      <Route exact path = "/Office_room" element ={<Office_room/>}></Route>
   
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
              <p>Dream Home was started in 2015, it is online platform where Architects, Civil engineers, Interior Designers and Marketing Professionals from different locations have joined hands to provide cost effective architectural solutions.
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

      <WhatsAppWidget
            phoneNo="917404145334"
            position="left"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            autoOpen={true}
            autoOpenTimer={5000}
            messageBox={true}
            // messageBoxTxt="Hi Team, is there any related service available ?"
            iconSize="50"
            iconColor="white"
            iconBgColor="green"
            headerIcon="/img/logo/logo.png"
            headerIconColor="green"
            // headerIconColor="green"
            headerIconBgColor="black"
            headerTxtColor="black"
            headerBgColor="green"
            headerTitle="Dream Home"
            headerCaption="Online"
            // bodyBgColor="./public/images/wbg.png"
            chatPersonName="Support"
            chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
            // footerBgColor="#999"
            placeholder="Type a message.."
            // btnBgColor="yellow"
            btnTxt="Start Chat"
            btnTxtColor="black"
        />
        <ScrollToTop smooth style={{backgroundColor: "green" ,marginBottom:"-22px"} } color='white' />
      </div>
      {/* end signup section */}
    </div>
  );

   
}



export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './contact.css';


function contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const CollectData = async () => {
    console.log(name, email, contact, message);
    let result = await fetch("http://localhost:5400/Enquiry", {
      method: "post",
      body: JSON.stringify({ name, email, contact, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      navigate("/");
    }

   };

    return (
      <div>
        <Form className="contactForm" >
          <div className="abc">
            <h1>CONTACT FORM</h1>
            <div className="rows">
          <Form.Group className="" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name"  autoFocus value={name}  onChange={(e) => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  value={email}  onChange={(e) => setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control type="num" placeholder="Enter Contact No."  value={contact}  onChange={(e) => setContact(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Drop a message</Form.Label>
            <Form.Control type="text" placeholder="Enter A Message" as ="textarea" rows ={3} value={message}  onChange={(e) => setMessage(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Save my name, email and website in this browser for the next time i message" />
          </Form.Group>
          <Button variant="primary" onClick={CollectData} type="submit" className="button">
            Submit
          </Button>
          </div>
          </div>
        </Form>
      </div>
    );
  
}
export default contact;

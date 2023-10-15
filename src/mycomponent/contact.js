import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './contact.css';


function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message ,contact } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      contact: contact.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

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
        <Form className="contactForm"  onSubmit={handleSubmit} >
          <div className="abc">
            <h1>CONTACT FORM</h1>


            {/* <h1>CONTACT FORM</h1> */}

            <div className="rows">
          <Form.Group className="" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter Name"  autoFocus value={name}  onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email"  value={email}  onChange={(e) => setEmail(e.target.value)}/>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control name="contact" type="num" placeholder="Enter Contact No."  value={contact}  onChange={(e) => setContact(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Drop a message</Form.Label>
            <Form.Control type="text" name="message" placeholder="Enter A Message" as ="textarea" rows ={3} value={message}  onChange={(e) => setMessage(e.target.value)} />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Save my name, email and website in this browser for the next time i message" />
          </Form.Group> */}
          <Button variant="primary" onClick={CollectData} type="submit" className="button" value="send">
          {status}
          </Button>
          </div>
          </div>
        </Form> 
        
        {/* <form onSubmit={handleSubmit} class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <label for="email">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div class="form-group mt-3">
                <label for="subject">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div class="form-group mt-3">
                <label for="message">Message</label>
                <textarea class="form-control" name="message" rows="8" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">{status}</button></div>
            </form> */}
      </div>
    );
  
}
export default Contact;

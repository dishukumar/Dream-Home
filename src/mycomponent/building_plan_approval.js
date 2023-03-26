import React from "react";
import "./building_plan_approval.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom"

function Building_plan_approval(props) {
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
  const navigate = useNavigate();

  const [error, setError] = useState(false);


  const CollectData = async () => {

    if ( !email || !password) {
      setError(true);
      return false;
    }


    console.log(email, password);
    let result = await fetch("http://localhost:5400/Login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if(result){
      navigate("/");
      handleClose()

    }
  };

  const Data = async () => {

    if (!name || !email || !password || !confirmPassword) {
      setError(true);
      return false;
    }

    console.log(name, email, password, confirmPassword);
    let result = await fetch("http://localhost:5400/Signup", {
      method: "post",
      body: JSON.stringify({ name, email, password, confirmPassword }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if(result){
      navigate("/");
      handClose()

    }
  };
  return (
    <div>
      {/* <div className="container-fluid"> */}
        <div className="head">
          <h1 className="heading">Building Plan Approval</h1>
        </div>
        <div className="container">
          <div className="building_plan">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="h2">Building Plan</h2>
                <p className="p">
                  e-Building Plan Approval is an e-Governance service where
                  applicants can submit application for approval of Building
                  Plan and make payments for land situated in Controlled Area
                  under GMDA where permission for Change of Land Use (CLU) has
                  been granted by GMDA under GMDA Act exercising the powers of
                  Director, Town & Country Planning Department. Online Filing
                  automates building plan approval process and aims to put the
                  application in public domain where the applicant submits the
                  applications with the relevant fee submission to the
                  Department and finally receives the approval. It enables
                  authorities to check the application related documents and
                  follow the approval processes.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="img">
                  <img src="/img/building_plan/1920.jpg" alt=""></img>
                </div>
              </div>
              <div className="container">
                <div className="button">
                  <Button variant="outline-primary" onClick={handShow} className="b1">
                    Register
                  </Button>
                  <Button variant="outline-primary" onClick={handleShow} className="b2">
                    Login
                  </Button>
                </div>
                {/* login section */}
                <div>
                  <Modal show={login} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>LOGIN</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />{error && !email && <span className="invalid">Enter Valid Email</span>}
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="*******"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />{error && !password && <span className="invalid">Enter Valid password</span>}
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          CollectData();
                        
                        }}
                      >
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
                      <Modal.Title>REGISTER</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Rocky"
                            autoFocus
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />{error && !name && <span className="invalid">Enter Valid Name</span>}
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />{error && !email && <span className="invalid">Enter Valid Email</span>}
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />{error && !password && <span className="invalid">Enter Correct Password</span>}
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="********"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />{error && !confirmPassword && <span className="invalid">Enter Correct Confirm Password</span>}

                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          Data()
                         
                        }}
                      >
                        Signup
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                {/* end signup section */}
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Building_plan_approval;

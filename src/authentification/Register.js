import React, { useState } from "react";
import { createUser } from "../Api/Api";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Register = () => {
    const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const handlecreate=()=>{
    createUser({email,password,name,lastname})
    navigate("/login")
  }


  return (
    <div>

<Container>

<Row>
  <Col md={{ span: 6, offset: 3 }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Lastname</Form.Label>
          <Form.Control onChange={(e)=>setLastname(e.target.value)}type="text" placeholder="Lastname" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e)=>setName(e.target.value)}type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="Password" />
        </Form.Group>
      
        <Button variant="primary" onClick={()=>handlecreate()}>Create account</Button>
      </Form>
      </Col>
        </Row>
      </Container>
    </div>
  );
};


export default Register ;
import React from 'react'
import { UserLogin } from '../Api/Api'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate()
const [email,setEmail]=useState("")
const [password, setPassword] = useState("")

const handlelogin=()=>{
    UserLogin({email,password})
    navigate("/dashboard")
  }

  return (
    <div>


<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      
      <Button  variant="primary" onClick={()=>handlelogin()}>
        Connexion
      </Button>
    </Form>

    </div>
  )
}

export default Login;

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { addartcile } from "../../Api/Api";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import toast,{Toaster} from "react-hot-toast"

function Addartciles() {

  const navigate = useNavigate()
 
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd=()=>{
    addartcile({category,price,size,quantity,color,type})
    toast.success('Successfully added!')

    navigate("/showcase")


  }

  return (
    <>
    <Toaster
  position="top-right"
  
/>
      <Container>

        <Row>
          <Col md={{ span: 6, offset: 3 }}>

          <Form style={{ margin: "30px" }}>
            <Form.Group className="mb-3" >
              <Form.Select onChange={(e)=>setCategory(e.target.value)}
              aria-label="Default select example"
               >
                <option>Open this select menu</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label  >type</Form.Label>
              <Form.Control onChange={(e)=>setType(e.target.value)}
              type="text" placeholder="type" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label >color</Form.Label>
              <Form.Control onChange={(e)=>setColor(e.target.value)}
              type="text" placeholder="color" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>price</Form.Label>
              <Form.Control onChange={(e)=>setPrice(e.target.value)}
               type="Number" placeholder="Price" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>size</Form.Label>
              <Form.Control onChange={(e)=>setSize(e.target.value)}
              type="Number" placeholder="size" />
            </Form.Group >
            <Form.Group className="mb-3" >
              <Form.Label>quantity</Form.Label>
              <Form.Control onChange={(e)=>setQuantity(e.target.value)}
              type="Number"placeholder="quantity" />
            </Form.Group>

            <Button variant="primary"  onClick={()=>handleAdd()}>
              Add
            </Button >
          </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Addartciles;

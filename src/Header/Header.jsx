import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import {BiCameraMovie} from 'react-icons/bi'

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="#home" style={{color:"red",fontWeight:"bolder"}}><BiCameraMovie style={{fontSize:"3.3rem",marginLeft:"5px"}}/>   Movie World </Navbar.Brand>
          <Nav className=" justify-content-end"  >
            <Nav.Link href="#home" style={{color:"red"}}>Popular Movies</Nav.Link>
            <Nav.Link href="#features" style={{color:"red"}}>Latest Movies</Nav.Link>
            <Nav.Link href="#pricing"style={{color:"red"}}>Comedy Movies</Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
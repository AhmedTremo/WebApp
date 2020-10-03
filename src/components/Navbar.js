import React, { Component } from "react";
import {NavBar, Nav, NavItem} from 'react-bootstrap';


export default class Navbar extends Component {
    render() {
      return (
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="http://localhost:3000/start">Industry 4.0</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="http://localhost:3000/start">Information</Nav.Link>
      <Nav.Link href="http://localhost:3000/control">Control</Nav.Link>
      <Nav.Link href="http://localhost:3000/results">Results</Nav.Link>
    </Nav>
    
  </Navbar>
  <br />
 

  <br />
 
</>
    );
}
}
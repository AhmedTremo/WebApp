import React, { Component } from "react";
import './login.css'
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import fire from "../config/fire";
import { CardDeck, Card,  Dropdown } from "react-bootstrap";
import bsCustomFileInput from "bs-custom-file-input";
import FileUpload from "./FileUpload";
import { Link } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:'',
            email: '',
            password: '',
            token: ''
         
        }
        this.login = this.login.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeUsername(e) {
      this.setState({
        username: e.target.value,
      });
    }
    onChangePassword(e) {
      this.setState({
        password: e.target.value,
      });
    }
    onChangeEmail(e) {
      this.setState({
        email: e.target.value,
      });
    }
    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    login(e){
      e.preventDefault()
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      }).catch((error)=>{
        console.log(error);
      }); 
    }

  
      
      
   


    render() {
        return (
          <div>
            <div>
          <form onSubmit={this.handleSubmit}>
                <Form className="login-form">
                  <h1 className="text-center">Industry 4.0</h1>
                  <h2 className="text-center">Welcome</h2>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Email" required/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" value={this.state.password} onChange={this.onChangePassword} placeholder="Password" required/>
                  </FormGroup>
                 
                  
                  <Button type="submit" className="btn-lg btn-dark btn-block"
                  onClick={(e) => {
                    if(this.state.email=== "" || this.state.password==="" )
                    alert('Enter your email and password')
                    else{
                      e.preventDefault()
                      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>
                      {window.location.href='http://localhost:3000/home';
                      }).catch((error)=>{
                        console.log(error);
                        alert('Please enter valid email and password');
                      }); 
                    
                    }
                    }}>
                     Log in
                  </Button>
                  <div className="text-center">
                    <a href="/register">Sign up</a>

                  </div>
                </Form>
                </form></div>
                
                
                <h2
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 50,
                  }}
                >
                  Know more about our website
                </h2>
                <CardDeck>
                <Card border="info">
                    <Card.Body>
                      <Card.Title center>Our project</Card.Title>
                      <Card.Text>
                      E-lab: The vision of the laboratory is dedicated to integrate electronics along with software to create a fully functional compare that will be auto controlled through our website
                      {" "}
                      </Card.Text>
                    </Card.Body>
        
                    
                  </Card>

                  <Card border="info">
                    <Card.Body>
                      <Card.Title>Experiment information</Card.Title>
                      <Card.Text>
                       1- The user enters a location that they want the package to reach.{"\n"}
                       <br></br>
                      
                       {"\n"}
                       
                       2- The Package moves in a specific path from start to destination location.{" "}
                       <br></br>
                       3- The user chooses the start point and the destination point.{" "}


                      </Card.Text>
                    </Card.Body>
        
                    
                  </Card>
                  
                  
                </CardDeck>
              </div>
        )}}
  

export default Login
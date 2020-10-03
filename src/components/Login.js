import React, { Component } from "react";
import './login.css'
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import fire from "../config/fire";
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
                      {window.location.href='http://localhost:3000/control';
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
        )}}
  

export default Login
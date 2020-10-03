import React, { Component } from "react";
import axios from "axios";
import './login.css'
import fire from "../config/fire";
import { Form, FormGroup, Button, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            rePassword: '',
         
        }
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangerePassword = this.onChangerePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        
    }

  
    onChangePassword(e) {
      this.setState({
        password: e.target.value,
      });
    }
    onChangerePassword(e) {
        this.setState({
          rePassword: e.target.value,
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
                  <FormGroup>
                    <Label>Re-Password</Label>
                    <Input type="password" value={this.state.rePassword} onChange={this.onChangerePassword} placeholder="Password" required/>
                  </FormGroup>
                  <FormGroup>
                  <Label>Gender</Label>
                  <select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    </FormGroup>
                  
                 
                  
                  <Button type="submit" className="btn-lg btn-dark btn-block"
                  onClick={(e) => {
                    if(this.state.email=== "" || this.state.password==="" || this.state.rePassword===""  )
                    alert('Fill in your required data')
                    else{
                      e.preventDefault()
                      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>
                      {window.location.href='http://localhost:3000/control';
                      }).catch((error)=>{
                        console.log(error);
                        alert('Please enter valid email and password');
                      }); 
                    }
                    }}>
                     sign up
                  </Button>
                  
                </Form>
                </form></div>
        )}}
  

export default Register
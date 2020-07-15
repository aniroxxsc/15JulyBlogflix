import React, { Component } from 'react';
// import './css/signup.css';
import axios from 'axios';
import Oauth from "./Googlesignin";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name:'',
      password: '',
      phone:'',
      email:'',
      username:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFnameChange = this.handleFnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleLnameChange = this.handleLnameChange.bind(this);
    this.handlePhnChange = this.handlePhnChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);

}


handleSubmit(event){
  event.preventDefault();

axios.post(`http://localhost:8000/auth/users/`, {
  email:this.state.email,
  username:this.state.username,
  password: this.state.password,
  first_name: this.state.first_name,
  last_name:this.state.last_name,
  phone:this.state.phone, 
})
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
        console.log(error.response);
    });
  }
    handleFnameChange(evt) {
      this.setState({
        first_name: evt.target.value,
      });
    };

    handleUserChange(evt) {
      this.setState({
        username: evt.target.value,
      });
    };


    handleLnameChange(evt) {
      this.setState({
        last_name: evt.target.value,
      });
    };

    handleEmailChange(evt) {
      this.setState({
        email: evt.target.value,
      });
    };

    handlePhnChange(evt) {
      this.setState({
        phone: evt.target.value,
      });
    };

    handlePassChange(evt) {
      this.setState({
        password: evt.target.value,
      });
    };


render(){
    return(
        <div>
<form onSubmit={this.handleSubmit}>
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" onChange={this.handleEmailChange} required />

    <label htmlFor="email"><b>First Name</b></label>
    <input type="text" placeholder="First Name" name="fname" onChange={this.handleFnameChange} required />

    <label htmlFor="email"><b>Last Name</b></label>
    <input type="text" placeholder="Last Name" name="lname" onChange={this.handleLnameChange} required />

    <label htmlFor="email"><b>Phone Number</b></label>
    <input type="text" placeholder="Phone Number" name="phn" onChange={this.handlePhnChange} required />
    
    <label htmlFor="email"><b>Username</b></label>
    <input type="text" placeholder="Username" name="phn" onChange={this.handleUserChange} required />

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" onChange={this.handlePassChange} required />


    <p>By creating an account you agree to our <a href="/login/">Terms & Privacy</a>.</p>
    <button type="submit" className="registerbtn">Register</button>
  </div>

  <div className="container signin">
    <p>Already have an account? <a href="/login/">Sign in</a>.</p>
  </div>
</form>
<Oauth />
        </div>
    )
};
}
export default Signup;
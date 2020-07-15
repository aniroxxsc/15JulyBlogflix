import React, { Component , useEffect} from 'react';
// import '../css/main.css';
import Oauth from './Googlesignin';
import axios from 'axios';
import Cookies from'js-cookie'
import { connect } from 'react-redux';
import {fetchUser} from '../redux'
import '../Home.css';
import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/owl.theme.default.min.css';
import '../css/responsive.css';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'react-multi-carousel/lib/styles.css';
import {Bumbotron, Button, Carousel } from 'react-bootstrap'
import Background from '../img/login.webp';

var sectionStyle = {
  width: "100%",
  height: "812px",
  backgroundImage: "url(${ Background })"
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sap: '',
      password: '',
      error: '',
      token: '',
      userid:'',
      incorrect: false
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }
  
  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({ error: '' });
    console.log(this.state);


    axios.post(`http://localhost:8000/auth/token/login`, {
      username:this.state.sap,
      password: this.state.password,
    })
    .then(res => {
        this.setState({ token : res.data.auth_token });
        this.props.fetchUser(this.state.token)
        console.log(this.state.token)
        Cookies.set('xxx', this.state.token , { expires: 7 });
        this.props.history.push('/')
        
      }).catch(error => {
        console.log(error.response);
        this.setState({incorrect : true})
    });

  }

  handleUserChange(evt) {
    this.setState({
      sap: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }
  
  render() {

    return (
      <div className="Login">
        <div className="login1">

   <section style={ sectionStyle }>
  
        <div className="container-fluid grid-container-new-login">
      <div className="row">
      <div className="col-md-4">
      </div>
        <div className="col-md-4 grid-item-new-login">
  
         <div className="col-md-12">
  
       <h6 className="login2">BLOGFLIX</h6>
         </div> 
  <div className="col-md-12">
       <h6 className="login3"> Log In</h6>
     </div> 
      
         <form >
    <div className="form-group">
    <h3 style = {{color: 'Red'}}>{this.state.incorrect ? "Invalid SAP ID or password." : ""}</h3>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter SAP ID" onChange={this.handleUserChange}/>
      
    </div>
    <div className="form-group">
      
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handlePassChange}/>
    </div>
    
      <button className="join-login" type="button" onClick={this.handleSubmit}>Login</button>
  </form>
          </div>
            <div className="col-md-4">
      </div>
  
        </div>
        
        </div>
     
        </section>

  
  </div>

  </div>
  
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: token => dispatch(fetchUser(token))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);







// axios.get('http://localhost:8000/auth/users/me',{ 
//           headers: {
//            Authorization: 'Token '+ this.state.token} 
//       })
//       .then(function (response) {
//         console.log(response.data);
//         Cookies.set('username', response.data.id, { expires: 7 });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
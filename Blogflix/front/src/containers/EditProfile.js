import  React,{Component} from 'react';
import '../Home.css';
import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/nice-select.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/unslider.css';
import '../css/responsive.css';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'
import InlineEdit from 'react-edit-inline2';
import {connect} from 'react-redux'
import axios from 'axios'
import {fetchUser} from '../redux'
import Sharad from '../components/Nav';

class EditProfile extends Component{
    constructor(props){
        super(props)
        this.state={user: {}, image: ""}
        this.dataChanged = this.dataChanged.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    dataChanged(data) {
      // data = { description: "New validated text comes here" }
      // Update your model from here
      console.log(data)
      this.setState({...data})
  }
        
  
  handleSubmit(){
    console.log(this.state.user)
        axios.patch('http://localhost:8000/auth/users/me/',this.state,{ 
          headers: {
           Authorization: 'Token '+ this.props.token } 
      }).then(res =>{
        console.log(res.data)
        this.props.fetchUser(this.props.token)
      })
    }


    handleChange = (e)=> {
      let data = new FormData();
      const files = e.target.files[0]
      console.log(files)
      data.append('profilepic', files)
      console.log(data)
      axios.patch('http://localhost:8000/auth/users/me/', data , {
        headers: {
          Authorization: 'Token '+ this.props.token }
      }).then(res =>{
        console.log(res.data)
        this.setState({image : res.data.profilepic})
        this.props.fetchUser(this.props.token)
      })
    }


        render(){
            console.log(this.props.userdata)
        return(

<div className="Edit colour">

{/* <html lang="en" className="colour">
 <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Front page</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet" />
    <link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/owl.carousel.min.css" />
    <link rel="stylesheet" href="css/owl.theme.default.min.css" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="responsive.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}
  
<section>


 <div className="topnav" id="myTopnav">
 <div className="flex-container">
  
 
 
 <div><Link to="/">ACM</Link> </div>


<div><Link to="/">Home</Link></div>
<div><Link to="/profile">Profile</Link></div>
<div><Link to="/profile/edit" className="active">Details</Link></div>



  <div><Link to="/" >Contact</Link></div>
                            <div> <Link to="#">Logout</Link></div>
                            <div> <Link to="#" className="fa fa-search"></Link> </div>
                        
<Link to="javascript:void(0);" className="icon" onClick={Sharad}><i className="fa fa-bars"></i></Link> 
  </div>
</div>

</section>




<div className="container-fluid">
<div className="row">

<div className="col-md-4">
<div className="editmain">
 <div className="thumbnail_container">
      <div className="thumbnail">
     
      <div className="circle" style={{backgroundImage: `url(${this.props.userdata.profilepic})`,backgroundSize: 'cover'}}>

  
</div>
   
          <div className="col-md-12">
          <button className="choose">
          <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleChange}/></button>
 </div>
 <div className="col-md-12">
    <h3 className="edit1">{this.props.userdata.first_name + " " + this.props.userdata.last_name} </h3>

    <hr className="hr2-edit" />
</div>
   </div>
    </div>

</div>
</div>




<div className="col-md-8">

    <div className="edit4">
      <p className="bio">BIO </p>
    <i className="fa fa-pencil"></i>
    </div>
    <hr className="hr1-edit" />
    <div className="row">
    <InlineEdit
              activeClassName="editing"
              text={this.props.userdata.bio}
              paramName="bio"
              change={this.dataChanged}
              style={{
                backgroundColor: '#FCF9F2',
                minWidth: 150,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                fontSize: 15,
                outline: 0,
                border: 0
              }}
            />
</div>


    <div className="grid-container2-edit">

        <div  className="grid-item2-edit">
        <p> <i className="fa fa-instagram  edit2"></i><a className="edit6">    <InlineEdit
              activeClassName="editing"
              text={this.props.userdata.instagram}
              paramName="instagram"
              change={this.dataChanged}
              style={{
                backgroundColor: '#FCF9F2',
                minWidth: 150,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                fontSize: 15,
                outline: 0,
                border: 0
              }}
            /></a> <i className="fa fa-pencil"></i></p>
       <hr className="hr2-edit" />
        </div>
        <div  className="grid-item2-edit">
        <p> <i className="fa fa-linkedin edit2"></i><a className="edit6">   <InlineEdit
              activeClassName="editing"
              text={this.props.userdata.linkedin}
              paramName="linkedin"
              change={this.dataChanged}
              style={{
                backgroundColor: '#FCF9F2',
                minWidth: 150,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                fontSize: 15,
                outline: 0,
                border: 0
              }}
            /></a>  &nbsp;&nbsp;<i className="fa fa-pencil"></i></p>
        <hr className="hr2-edit" />
        </div>
        <div  className="grid-item2-edit">
        <p> <i className="fa fa-github edit2"></i><a className="edit6">    <InlineEdit
              activeClassName="editing"
              text={this.props.userdata.github}
              paramName="github"
              change={this.dataChanged}
              style={{
                backgroundColor: '#FCF9F2',
                minWidth: 150,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                fontSize: 15,
                outline: 0,
                border: 0
              }}
            /></a>  <i className="fa fa-pencil"></i></p>
        <hr className="hr2-edit" />
        </div>
        <div  className="grid-item2-edit">
        <p> <i className="fa fa-facebook edit2"></i><a className="edit6">    <InlineEdit
              activeClassName="editing"
              text={this.props.userdata.facebook}
              paramName="facebook"
              change={this.dataChanged}
              style={{
                backgroundColor: '#FCF9F2',
                minWidth: 150,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                fontSize: 15,
                outline: 0,
                border: 0
              }}
            /> </a> <i className="fa fa-pencil"></i></p>
        <hr className="hr2-edit" />

        </div>
       


    </div>
    </div>
    </div>
</div>
<div className="container-fluid">
<div className="row">
<div className="col-md-12">

    <div className="edit3">
    <button className="editbutton" onClick={this.handleSubmit}><i className="fa fa-5x">&#xf055;</i></button>
<p className="edit7">Edit</p>
</div>

</div>
</div>



</div>




<section>

  <br />
    <div className="container-fluid">
       


      <div className="row align-items-center footer2">
    
 
  

   
</div>
</div>
</section>
<hr className=".col-xs-6 mx-auto pt-0.9 footer1"/>
<br />
<section>
  <br />
    <div className="container-fluid">
       


      <div className="row align-items-center footer3">
    
  <div  className= "col-md-6 footer5">
    <h2 className="footer6">
     Terms of Use  |  Privacy Policy  |  Cookies
   </h2>
  
 

</div>
<div className="col-md-3 col-md-offset-3">
  <a href="https://www.facebook.com/upesacm/" className="fa fa-facebook"></a>
<a href="https://twitter.com/upesacm?lang=en" className="fa fa-twitter"></a>
<a href="https://www.instagram.com/upesacm/?hl=en" className="fa fa-instagram"></a>
<a href="https://www.linkedin.com/company/upesacm/" className="fa fa-linkedin"></a>
</div>
   
</div>
</div>
</section>
<br />

<section>
  <div className="container-fluid">
       


        <div className="row  align-items-center footer3">
    <div className=" col-md-12 footer5">
    <h2 className="footer6">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur . Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </h2>
  </div>
</div>
  </div>
  <br />
  <br />
</section>





</div>

        );
                
            
      }
    }
        
    

const mapStateToProps = state => {
    return {
        userdata: state.userdata,
        token: state.token
    }
} 
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: token => dispatch(fetchUser(token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);







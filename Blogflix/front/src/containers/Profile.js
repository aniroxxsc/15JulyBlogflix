import  React,{Component} from 'react';
import Slider from 'infinite-react-carousel';
import '../Home.css';
import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/nice-select.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/unslider.css';
import '../css/responsive.css';
import Profile2 from '../components/Profile2';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'react-multi-carousel/lib/styles.css';
import {connect} from 'react-redux'
import Sharad from '../components/Nav';
import {Bumbotron, Button, Carousel } from 'react-bootstrap'
class Profile extends Component{
 constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }


  componentDidMount(){
   
    var tempArray=[];
    var n=this.props.data.length;
    console.log(n)
    for(var i=0; i<n;i++)
    {
      tempArray.push(<Profile2 data={this.props.data[i]} />);
    
  }

this.setState({
      data: tempArray
    });


}
        
        
        render(){
        return(

<div className="Profile colour">



<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
 

<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
   
  









<section>


 <div className="topnav" id="myTopnav">
 <div className="flex-container">
  
 
 
   <div><a href="#">Categories</a> </div>


   <div><a href="/Home">Home</a></div>
   <div><a href="/Edit">Log in</a></div>
   <div><a href="/About" className="active">About</a></div>

 
   
     <div><a href="/Blog" >BLOG</a></div>
                               <div> <a href="#">Contact</a></div>
                               <div> <a href="#" className="fa fa-search"></a> </div>
                             
 
  <a href="javascript:void(0);"  className="icon" onClick={Sharad}><i className="fa fa-bars"></i></a>
  </div>
  </div>


</section>

        <div className="container-fluid">
        <div className="row">
<div className="col-xs-12 col-md-4 profile">
 <div className="thumbnail_container">
      <div className="thumbnail">
     <div className="circle" style={{backgroundImage: `url(${this.props.userdata.profilepic})`,backgroundSize: 'cover'}}>

  
    </div>
    </div>
   
    </div>
        <h5 className="sharad-profile">{this.props.userdata.first_name + " " + this.props.userdata.last_name}</h5>
    <p className="text-p">
      {this.props.userdata.bio}
    </p>
        <i className="fa fa-instagram sharad2-profile"></i>
<i className="fa fa-linkedin sharad2-profile"></i>
<i className="fa fa-github sharad2-profile"></i>
<i className="fa fa-facebook sharad2-profile"></i>

  </div>

  <div className="col-xs-12 col-md-8">
  <div className="y-overflow table">

    <h5 className="sharad3-profile">MY BLOGS</h5>
    <div className="grid-container-profile">
    <div>
     {this.state.data}
      </div>
      
  </div>

</div>

</div>
</div>
</div>

<section>

    <div className="container">
       


      <div className="row footer2">
    
  <div  className= "col-md-6 footer5">
  
  
 

</div>

   
</div>
</div>
</section>




<hr className=".col-xs-6 mx-auto pt-0.9 footer1"/>
<br />
<br/>

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
</section>
<br />
<br />




        
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
      
    

export default connect(mapStateToProps)(Profile);
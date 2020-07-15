import React from 'react';
import {Link} from 'react-router-dom'
import Slider from 'infinite-react-carousel';
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
import {Bumbotron, Button, Carousel } from 'react-bootstrap'
import axios from 'axios';
import Blogimage from "../images/blog.jpg"
import {connect} from 'react-redux'
import {logout} from '../redux'
import Sharad from './Nav';

class Blog extends React.Component { 
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this)
  }

  logout(){
    axios.post('http://127.0.0.1:8000/auth/token/logout/',null,{
      headers: {
       Authorization: 'Token '+ this.props.token } 
  }).then(res => {
    console.log(res.data)
    this.props.logout()
  })
  }
  render(){
    console.log(this.props.token)
  if(this.props.data.articles[0]){
    return(

<div className="Home colour main">
  


<section>


 <div id="myTopnav" className="topnav">
 <div className="flex-container">
 <div><Link to="/">ACM</Link></div>
    <div><Link to="/">ACMW</Link></div>
    <div><Link to="/createnew">Create</Link></div>
    <div><Link to="/" className="active">BlogFlix</Link></div>
    <div><Link to="/profile" >Account</Link></div>
    <div> {this.props.token ? <Link to="/" onClick={this.logout}>Logout</Link> : <Link to="/login">Login</Link>}</div>
    <div> <Link to="#" className="fa fa-search"></Link> </div>
    </div>                        
     
    <Link to="javascript:void(0);" className="icon" onClick={Sharad}><i className="fa fa-bars"></i></Link>
 
</div>

</section>

        <div>

       <Carousel>
  <Carousel.Item>
    <img
      className="slider-container " src={Blogimage}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slider-container "
    src={Blogimage}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slider-container "
      src={Blogimage}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br />
<br />
</div>
<section className="">
<div className="container-fluid">
<div className="row">
<div className="col-md-8 test2 table element">


<div className="grid-container_featured">
    <div className="grid-item1">FEATURED</div>
    <div className="grid-item colour2">

        <img src={this.props.data.articles[0].thumbnail} height="230px" width="300px" align="center" />
        <br />
        {/* <br />
        <button className="button7">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
</button> */}

        <Link to={'/blog/' +this.props.data.articles[0].slug}> <h4>{this.props.data.articles[0].title}</h4> </Link>
        
        <h5>
        <div className='b'>
          {this.props.data.articles[0].description}
          </div>
        </h5>
{/* <button className="button6">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Start</Link>
</button> */}

    </div>
    <div className="grid-item colour2">


        <img src={this.props.data.articles[1].thumbnail} height="230px" width="300px" align="center" />
          
         <br />
        {/*<br />
          <button className="button7">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
</button> */}

        <Link to={'/blog/' +this.props.data.articles[1].slug}> <h4>{this.props.data.articles[1].title}</h4> </Link>


        <h5>
        <div className='b'>
          {this.props.data.articles[1].description}
          </div>
          </h5>

         {/* <button className="button6">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Start</Link>
</button> */}


    </div>
    <div className=" grid-item grid-item3 colour2">

        <img src={this.props.data.articles[2].thumbnail} height="580px" width="300px" align="center" />
          
               <br />
        {/*<br />
         <button className="button7">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
</button> */}

        <Link to={'/blog/' +this.props.data.articles[2].slug}> <h4>{this.props.data.articles[2].title}</h4> </Link>

        <h5>
        <div className='b'>
          {this.props.data.articles[2].description}
          </div>
          </h5>

          {/* <button className="button6">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Start</Link>
</button> */}

    </div>
    <div className="grid-item colour2">

        <img src={this.props.data.articles[3].thumbnail} height="230px" width="300px" align="center" />

          
               <br />
        {/*<br />
         <button className="button7">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
</button> */}

        <Link to={'/blog/' +this.props.data.articles[3].slug}> <h4>{this.props.data.articles[3].title}</h4> </Link>


        <h5>
        <div className='b'>
          {this.props.data.articles[3].description}
          </div>
          </h5>

   {/* <button className="button6">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Start</Link>
</button> */}

    </div>
    <div className="grid-item colour2">
      
        <img src={this.props.data.articles[4].thumbnail} height="230px" width="300px" align="center" />
          
               <br />
        {/* <br />
        <button className="button7">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
</button> */}

        <Link to={'/blog/' +this.props.data.articles[4].slug}> <h4>{this.props.data.articles[4].title}</h4> </Link>

        <h5>
        <div className='b'>
          {this.props.data.articles[4].description}
          </div>
          </h5>
      
         {/* <button className="button6">
        <Link to="/Blog" style={{color: "#FFFFFF"}} >Start</Link>
</button> */}

</div>
    </div>

</div>
<div className="col-md-4">

<div className="grid-container_latest colour">
  <div className="grid-item_latest1">LATEST</div>

  <div className="grid-item_latest colour">

    <img src={require('../img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="90px" width="190px" align="center" />
    
    <h4 >Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet

          </p>

  </div>
  <div className="grid-item_latest colour">

    <img src={require('../img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="90px" width="190px" align="center" />
    
    <h4>Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet

          </p>

  </div>
  <div className="grid-item_latest colour">

    <img src={require('../img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="90px" width="190px" align="center" />

    <h4>Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet
          </p>
    

  </div>
  <div className="grid-item_latest colour">

    <img src={require('../img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="90px" width="190px" align="center" />

    <h4>Lorem&nbsp;ipsum</h4>

          <p>
          
          Lorem ipsum dolor sit amet

          </p>
    

          </div>

</div>
</div>
</div>
</div>




</section>




<section className="test2 table">

<div className="grid-container5 colour3">

    <div className="grid-item15 grid-item5">Popular Categories</div>
    <div className="container">
<div className="row">
    <div className=".col-md-12 grid-item5 grid33">
      

      <img src={require('../img/sydney-best-GETTY.webp')} align="left"/>

      <h3>lorem ipsum</h3>

      <h6>
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt

      </h6>

      <button className="button5">
        
        lorem

      </button>



    </div>
    </div>
<div className="row">
    <div className=".col-md-12 grid-item25 grid-item5 grid33" align="center">
      

      <img src={require('../img/sydney-best-GETTY.webp')} align="left" />

      <h3>lorem ipsum</h3>

      <h6>
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt

      </h6>


      <button className="button5">
        
        lorem

      </button>


    </div>
    </div>
    <div className="row">

    <div className=".col-md-12 grid-item35 grid-item5 grid33">
      

      <img src={require('../img/sydney-best-GETTY.webp')} align="left" />

      <h3>lorem ipsum</h3>

      <h6>
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt

      </h6>

      <button className="button5">
        
        lorem

      </button>



    </div>
    </div>
    </div>

  </div>

</section>

<section className="joinus">
    <div className="row cont h-100">
        <div className="col-md-8 my-auto">
       <p className="headin2" >BECOME NEWSLETTER</p>
            <p className="headin">Join Our Community Today and Stay Updated!!</p>
            <p className="headin2" >receive our newsletter now</p>
            
           
        </div>
        <div className="col-md-4 my-auto">
            <form className="Login">
                <input className="box1" type="text" name="" placeholder="Name" /><br />
                <input className="box1" type="text" name="" placeholder="Email" /><br />
                <button className="join" type="button">Join</button>
            </form>
        </div>
    </div>
</section>

<section>
 <div className="Crible_block">
            
            <div className="row">
                <div className="col-md-4 colour">
                                <img className="image2" src={require('../img/4-512.png')} />
                    <p className="Crible_para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                    </p>
                   <h1 className="Crible_head">  <img className="image" src={require('../img/circle-cropped.png')} /> Lorem ipsum
                   </h1>
                </div>
                <div className="col-md-4 colour">
                    
                   <img className="image2" src={require('../img/4-512.png')} />
                    <p className="Crible_para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                    </p>
                     <h1 className="Crible_head">  <img className="image" src={require('../img/circle-cropped.png')} /> Lorem ipsum
                     </h1>
                </div>
                <div className="col-md-4 colour">
                    <img className="image2" src={require('../img/4-512.png')} />
                    
                    <p className="Crible_para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                    </p> 
                    <h1 className="Crible_head">  <img className="image" src={require('../img/circle-cropped.png')} /> Lorem ipsum
                   
                    </h1>
                   
                </div>
            </div>
        </div>
        </section>


<br />



<br />

<hr className=".col-xs-6 mx-auto pt-0.9 footer1"/>
<br />


<section>
  <br />
    <div className="container-fluid">
       


      <div className="row align-items-center footer3">
    
  <div  className= "col-md-6 footer5">
    <h2 className="footer6" style={{align:'left'}}>
     Terms of Use  |  Privacy Policy  |  Cookies
   </h2>
  
 

</div>
<div className="col-md-3 col-md-offset-3">
  <Link to="https://www.facebook.com/upesacm/" className="fa fa-facebook"></Link>
<Link to="https://twitter.com/upesacm?lang=en" className="fa fa-twitter"></Link>
<Link to="https://www.instagram.com/upesacm/?hl=en" className="fa fa-instagram"></Link>
<Link to="https://www.linkedin.com/company/upesacm/" className="fa fa-linkedin"></Link>
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
 return(
   <div>
     Loading...
   </div>
 );}
 }

 const mapStateToProps = state => {
  return {
      userdata: state.userdata,
      token: state.token
  }
} 
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Blog);



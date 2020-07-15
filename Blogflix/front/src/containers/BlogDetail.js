import React from "react";
import axios from 'axios';
import Comment from '../components/Comment'
import {Link} from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import {connect } from  'react-redux'
import InlineEdit from 'react-edit-inline2';
import Sharad from '../components/Nav';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Test from "../components/Test"

class BlogDetail extends React.Component {
  constructor(props){
    super(props);
    this.like = this.like.bind(this)
    this.newComment = this.newComment.bind(this)
  }
    state = {
        blog: {},
        comments: [],
        likes: null,
        data: [],
    };
    componentWillMount() {
        const slug =  this.props.match.params.slug;
        let url = 'http://localhost:8000/blog/' + slug;
        axios.get(url)
            .then(res =>{
                console.log(res.data[0].user)
                this.setState({
                    blog:res.data[0]
                });
              let url2 = 'http://localhost:8000/blog/'+res.data[0].slug+'/comments/view'
              axios.get(url2)
                .then(res =>{
                    this.setState({
                        comments:res.data
                    });
                    var tempArray=[];
                    var n=this.state.comments.length;
                    for(var i=0; i<n;i++)
                    {
                      tempArray.push(<Comment data={this.state.comments[i]} />);
                    }
                    this.setState({
                          data: tempArray
                        });
                    let  url3=url+'/likes'
                    axios.get(url3)
                    .then(res=>{
                      this.setState({likes : res.data.length })
                    })
                });

        });   
        
    
    };


    like(){
      const slug =  this.props.match.params.slug;
      let url = 'http://localhost:8000/blog/' + slug+ '/likes/likecreate';
      axios.post(url,null,{ 
        headers: {
         Authorization: 'Token '+ this.props.token } 
    }).then(res => {
      console.log(res)
      this.setState({likes : res.data.count})
    })
    }

    newComment(data2){
      console.log(data2.content)
      const slug =  this.props.match.params.slug;
      let username = this.props.userdata.first_name + " " + this.props.userdata.last_name
      let data = new FormData();
      data.append('content', data2.content)
      data.append('username', username )
      let url = 'http://localhost:8000/blog/' + slug+ '/comments/create'
      axios.post(url,data,{ 
        headers: {
         Authorization: 'Token '+ this.props.token } 
    }).then(res =>{
      console.log(res.data)
      this.setState({data : this.state.data + res.data})
    }).catch(res => {
      console.log(res)
    })
    }

    render(){
        if(!this.state.blog.user){
            return(<div>Loading...</div>)
        }else{
        return(
            
            <div className="Blog main colour">
            
            
            
            <section>
            
            
             <div className="topnav" id="myTopnav">
             <div className="flex-container">
              
             
             
            <div><Link to="/">ACM</Link> </div>
            
            
            <div><Link to="/">ACM-W</Link></div>
            <div><Link to="/profile">Account</Link></div>
            <div><Link to="/" className="active">BlogFlix</Link></div>
            <div><Link to="/Home" >Home</Link></div>
            <div> <Link to="#">Contact</Link></div>
            <div> <Link to="#" className="fa fa-search"></Link> </div>
                                         
               </div>
              <Link to="javascript:void(0);" className="icon" onClick={Sharad}><i className="fa fa-bars"></i></Link>
            
            </div>
            
            </section>
            
                    <section className="test2 table">
                   
                     <div className="bg-text-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    {/* <div className="bg-text">
                                        
                                        
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    </section>
            
                 
            <div className="container-fluid">
            <div className="row">
            <div className="col-xs-12 col-md-1">
            </div>
            
            <div className="col-xs-12 col-md-8">
             {/* <button className="button8">
                    <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
            </button> */}
            <br/>
            <br/>
            <br/> 
              <h1 className="blog-test">{this.state.blog.title}</h1>
              <br/>
            <br/>
            <br/>
              
              <div className="blog-test"> <h5>{this.state.blog.description}</h5></div>
            
            <br />
            <br />
            <br />
            
              <div className="content-blog">
                
                
                    
                <div className="thumbnail1">
              <div className="text-justify">{ ReactHtmlParser(this.state.blog.content) }</div>
                </div>
                </div>
                <button onClick={this.like} style={{backgroundColor:'#FCF9F2'}}><i className="fa fa-thumbs-up sharad2-blog like" > {this.state.likes}</i></button>

            <div className="col-md-12">
            
            <h1 className="blog-test"> SHARE
              {/* <i className="fa fa-instagram sharad2-blog"></i> */}
            
            <LinkedinShareButton url= {window.location.href}><i className="fa fa-linkedin sharad2-blog"></i></LinkedinShareButton>
            <FacebookShareButton url={window.location.href}><i className="fa fa-facebook sharad2-blog"></i></FacebookShareButton>
            <TwitterShareButton url={window.location.href}><i className="fa fa-twitter sharad2-blog"></i></TwitterShareButton>
            
            </h1>
          
            </div>
            <br/>
            <div className="col-md-12">
            <h1 className=" blog-test3"> COMMENTS </h1>
</div>

<div className="container-fluid">
<div className="row">

<div className="col-md-2">
</div>
</div>
</div>
<div className="container-fluid">
<div className="row">
  <div className="col-md-12">
    <div className="grid-item-blog1">
<InlineEdit
              activeClassName="editing"
              text="Add a comment"
              paramName="content"
              change={this.newComment}
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
</div>
<div className="col-md-12">

  <div>

     {this.state.data}
      </div>
     
      </div>


</div>
</div>
</div>

      
            
            <div className="col-xs-12 col-md-2">
                
                <div className="aside1-blog">
            
                <div className="thumbnail2_container">
      <div className="thumbnail2">
     
      <div className="circle1" style={{backgroundImage: `url(${this.props.userdata.profilepic})`,backgroundSize: 'cover'}}>

  
</div>
   
              
                </div>
               
</div>
                <h5>{this.state.blog.user.first_name +" " + this.state.blog.user.last_name}</h5>
            
                <p>
                  {this.state.blog.user.bio}
            
                </p>
            
                </div>
            
            
            </div>
            </div>
            </div>

            <br />
            <br />
            
            <section className="">
            
            <h1>MORE LIKE THIS</h1>
            <div className="container-fluid">
            <div className="row">
            
              <div className="col-md-3 grid-item3-blog">
              <img src={require('../img/pexels-photo-1034662.jpeg')}className="displayed-blog"/>
            
               <button className="button9">
                    <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
            </button>
            <br/>
            <br/>
            <br/>
                  <p className="p1">Lorem ipsum</p>
                <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                <button>
                    
                    lorem
            
                </button>
            
              </div>
              <div className="col-md-3 grid-item3-blog">
                <img src={require('../img/pexels-photo-1034662.jpeg')} className="displayed-blog" />
                 <button className="button9">
                    <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
            </button>
            <br/>
            <br/>
            <br/>
                  <p className="p1">Lorem ipsum</p>
                <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                <button>
                    
                    lorem
            
                </button>
            
              </div>
              <div className="col-md-3 grid-item3-blog">  
                <img src={require('../img/pexels-photo-1034662.jpeg')} className="displayed-blog" />
                 <button className="button9">
                    <Link to="/Blog" style={{color: "#FFFFFF"}} >Subscribe</Link>
            </button>
            <br/>
            <br/>
            <br/>
                <p className="p1">Lorem ipsum</p>
                <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                <button>

                    lorem
            
                </button>
            
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
            <br/>
            <br/>
            
            <hr className=".col-xs-6 mx-auto pt-0.9 footer1"/>
            
            
            
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
            
        )
    };
}}


const mapStateToProps = state => {
  return {
      userdata: state.userdata,
      token: state.token
  }
} 
export default connect(mapStateToProps)(BlogDetail);


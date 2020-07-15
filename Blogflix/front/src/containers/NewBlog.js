// import React from 'react';
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
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module-react';
import uniqueSlug from 'unique-slug'
import { connect } from 'react-redux'
Quill.register('modules/imageResize', ImageResize)
Quill.register('modules/imageDrop', ImageDrop);

// class NewBlog extends React.Component {
//     constructor (props) {
//       super(props)
//       this.state = { NewBlogHtml: '', theme: 'snow' , title: '',description:''}
//       this.handleChange = this.handleChange.bind(this)
//       this.onSubmit = this.onSubmit.bind(this)
//       this.setTitle = this.setTitle.bind(this)
//       this.setDescription = this.setDescription.bind(this)
//     }
    
//     handleChange (html) {
//         this.setState({ NewBlogHtml: html });
//     }
//     setTitle (title) {
//       this.setState({ title: title });
//   }
//   setDescription (description) {
//     this.setState({ description : description });
// }
//     handleThemeChange (newTheme) {
//       if (newTheme === "core") newTheme = null;
//       this.setState({ theme: newTheme })
//     }

//     onSubmit (event){
//       event.preventDefault();
//       const data ={
//         content :this.state.NewBlogHtml,
//         title: this.state.title,
//         user : this.props.userdata.id,
//         description:this.state.description,
//         slug: uniqueSlug(this.state.description)
//       }

//       axios.post('http://localhost:8000/blog/', data,      {
//         headers: {
//             'Content-Type': 'application/json'
//         }}
// )
// .then(res => {
//   console.log(res.data);
//   this.props.history.push('/')
// }).catch(error => {
//   console.log(error.response);
// })
// }
    
//     render () {
//       return (
//         <div>
//           <form onSubmit={this.onSubmit}>
//             <p>Title</p><input placeholder="Put a Title." onChange={(e) => this.setTitle(e.target.value)} label='title'></input><br /><br /><p>Desciption</p>
//             <input placeholder="Put a Desciption." onChange={(e) => this.setDescription(e.target.value)} label='description'></input><br /><br />
//           <ReactQuill 
//             theme={this.state.theme}
//             onChange={this.handleChange}
//             value={this.state.NewBlogHtml}
//             modules={NewBlog.modules}
//             formats={NewBlog.formats}
//             bounds={'.app'}
//             placeholder={this.props.placeholder}
//            />
//           <div className="themeSwitcher">
//             <label>Theme </label>
//             <select onChange={(e) => 
//                 this.handleThemeChange(e.target.value)}>
//               <option value="snow">Snow</option>
//             </select>
//           </div>
          
//                 <div style={{ textAlign: 'center', margin: '2rem', }}>
//                     <button
//                         size="large"
//                         htmlType="submit"
//                         className=""
//                         onSubmit={this.onSubmit}
//                     >
//                         Submit
//                 </button>
//                 </div>
//             </form>
//          </div>
//        )
//     }
//   }
  
//   /* 
//    * Quill modules to attach to NewBlog
//    * See https://quilljs.com/docs/modules/ for complete options
//    */
//   NewBlog.modules = {
//     imageResize: {
//       handleStyles: {
//         backgroundColor: 'black',
//         border: 'none',
//         color: 'white',
//       },
//       modules: ['Resize', 'DisplaySize', 'Toolbar'],
//     },
//   imageDrop: true,
//     toolbar: [
//       [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
//       [{size: []}],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{'list': 'ordered'}, {'list': 'bullet'}, 
//        {'indent': '-1'}, {'indent': '+1'}],
//       ['link', 'image', 'video'],
//       ['clean']
//     ],
//     clipboard: {
//       // toggle to add extra line breaks when pasting HTML:
//       matchVisual: false,
//     }
//   }
//   /* 
//    * Quill NewBlog formats
//    * See https://quilljs.com/docs/formats/
//    */
//   NewBlog.formats = [
//     'header', 'font', 'size',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent',
//     'link', 'image', 'video'
//   ]
  

// const mapStateToProps = state => {
//     return {
//       userdata: state.userdata
//     }
//   }


// export default connect(mapStateToProps)(NewBlog);




class NewBlog extends Component{
  constructor (props) {
           super(props)
           this.state = { NewBlogHtml: '', theme: 'snow' , title: '',description:''}
           this.handleChange = this.handleChange.bind(this)
           this.onSubmit = this.onSubmit.bind(this)
           this.setTitle = this.setTitle.bind(this)
           this.setDescription = this.setDescription.bind(this)
         }
        
         handleChange (html) {
             this.setState({ NewBlogHtml: html });
         }
         setTitle (title) {
           this.setState({ title: title });
       }
       setDescription (description) {
         this.setState({ description : description });
     }
         handleThemeChange (newTheme) {
           if (newTheme === "core") newTheme = null;
           this.setState({ theme: newTheme })
         }
             onSubmit (event){
          event.preventDefault();
           const data ={
             content :this.state.NewBlogHtml,
             title: this.state.title,
             user : this.props.userdata.id,
             description:this.state.description,
             slug: uniqueSlug(this.state.description)
           }
    
           axios.post('http://localhost:8000/blog/', data,      {
             headers: {
                 'Content-Type': 'application/json'
             }}
     )
     .then(res => {
       console.log(res.data);
       this.props.history.push('/'+res.data.slug)
     }).catch(error => {
       console.log(error.response);
     })
    }
        
        
        render(){
        return(

<div className="New colour">


    <div className="colour">
<section>


 <div className="topnav" id="myTopnav">
 <div className="flex-container">
  
 
 
   <div><a href="#">Categories</a> </div>


   <div><a href="/Home">Home</a></div>
   <div><a href="/Profile">About</a></div>
   <div><a href="/Edit" className="active">Log in</a></div>
   <div><a href="/Blog" >BLOG</a></div>
   <div> <a href="#">Contact</a></div>
   <div> <a href="#" className="fa fa-search"></a> </div>
                             
 
  <a href="javascript:void(0);" className="icon" onclick="Sharad()"><i className="fa fa-bars"></i></a>
  </div>
</div>

</section>


<div className="container-fluid">
<div className="row">

<div className="col-md-12">

<h1 className="blog-test"> CREATE NEW BLOG </h1>

</div>



<div className="col-md-12">
<p className="new1" > Add a title <span className="fa fa-pencil"><hr className="hr2-new" /></span> </p>


</div>
<div className="col-md-12">
<p className="new1" > Add a discription <span className="fa fa-pencil"><hr className="hr2-new" /></span> </p>


</div>


    </div>
    </div>

    <div className="container-fluid grid-container-new">
    <div className="row">
    <div className="col-md-1">
    </div>
      <div className="col-md-8 grid-item-new">

       
     
              <ReactQuill 
             theme={this.state.theme}
             onChange={this.handleChange}
             value={this.state.NewBlogHtml}
             modules={NewBlog.modules}
             formats={NewBlog.formats}
             bounds={'.app'}
           placeholder={this.props.placeholder}
            />
           <div className="themeSwitcher">
             <label>Theme </label>
             <select onChange={(e) => 
                this.handleThemeChange(e.target.value)}>
              <option value="snow">Snow</option>
             </select>
           </div>
          
        </div>

      </div>
       <button className="join-new" type="button">CREATE</button>
      </div>
   


<hr className=".col-xs-6 mx-auto pt-0.9 footer1"/>
<br />
<section>
  <br />
    <div className="container-fluid">
       


      <div className="row align-items-center footer3">
    
  <div  className= "col-md-6 footer5">
    <h className="footer6">
     Terms of Use  |  Privacy Policy  |  Cookies
   </h>
  
 

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
    <h className="footer6">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur . Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </h>
  </div>
</div>
  </div>
  <br />
  <br />
</section>




</div>



</div>



        );
                
            
      }
    }
        
    NewBlog.modules = {
           imageResize: {
             handleStyles: {
               backgroundColor: 'black',
               border: 'none',
               color: 'white',
             },
             modules: ['Resize', 'DisplaySize', 'Toolbar'],
           },
         imageDrop: true,
           toolbar: [
             [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
             ['bold', 'italic', 'underline', 'strike', 'blockquote'],
             [{'list': 'ordered'}, {'list': 'bullet'}, 
              {'indent': '-1'}, {'indent': '+1'}],
             ['link', 'image', 'video'],
             ['clean']
           ],
          clipboard: {
             // toggle to add extra line breaks when pasting HTML:
             matchVisual: false,
           }
         }
        /* 
          * Quill NewBlog formats
          * See https://quilljs.com/docs/formats/
          */
         NewBlog.formats = [
           'header', 'font', 'size',
          'bold', 'italic', 'underline', 'strike', 'blockquote',
          'list', 'bullet', 'indent',
           'link', 'image', 'video'
         ]
const mapStateToProps = state => {
    return {
      userdata: state.userdata
    }
  }
    

export default connect(mapStateToProps)(NewBlog);






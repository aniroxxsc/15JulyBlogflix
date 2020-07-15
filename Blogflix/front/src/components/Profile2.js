import  React,{Component} from 'react';
import '../Home.css';

class Profile2 extends Component{

        
        
        render(){
        return(

<div className="Profile">

 <div className="grid-item-profile">

        <img src={"http://localhost:8000"+this.props.data.thumbnail} align="right" className="img2-profile" />
       
     

        <h6 className="profile-text">{this.props.data.title}</h6>
        <p className="profile-text">{this.props.data.description}</p>
        <button className="b2-profile">Read</button>

      </div>

      </div>



        );
                
            
      }
    }
        
    

    

export default Profile2;
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
import {connect} from 'react-redux'
import axios from 'axios';
import Profile from "./Profile"


class ProfilePage extends Component{
    constructor(props){
        super(props);
    this.state={ 
        myblogs: []
    }
}
    componentDidMount(){
            axios.get('http://localhost:8000/blog/list/myposts',{ 
                headers: {
                 Authorization: 'Token '+ this.props.token } 
            }).then(res=>{
                console.log(res.data)
                this.setState({
                    myblogs : res.data})
            })
    }
        
    render(){
        console.log(this.state.myblogs) 
        return(<div>{this.state.myblogs[0] ? <Profile data={this.state.myblogs} /> : <div>Loading...</div>}</div>
        );
    }

}



const mapStateToProps = state => {
    return {
        userdata: state.userdata,
        token: state.token
    }
}   
            
                
            
export default connect(mapStateToProps)(ProfilePage);
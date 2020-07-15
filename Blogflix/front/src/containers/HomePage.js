import React from 'react';
import axios from 'axios';
import Blog from '../components/Blog'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class HomePage extends React.Component {
    state = {
        articles: [],
    }
    componentDidMount() {
        axios.get('http://localhost:8000/blog/latest',)
            .then(res =>{
                this.setState({
                    articles:res.data
                });
                console.log(res.data)
            })
            
    }

    render(){
        return(
            <div>
            
                    <Blog data={this.state}/>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      userdata: state.userdata
    }
  }


export default connect(mapStateToProps)(HomePage);
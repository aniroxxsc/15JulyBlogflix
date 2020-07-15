import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import LoginPage from "./containers/LoginPage";
import Signup from "./containers/Signup";
import NewBlog from "./containers/NewBlog"
import HomePage from "./containers/HomePage"
import BlogDetail from "./containers/BlogDetail"
import ProfilePage from "./containers/ProfilePage"
import EditProfile from "./containers/EditProfile"
import { connect } from 'react-redux'

class BaseRouter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     auth: true
    }
  }
    componentDidMount() {
     if (this.props.token) {
       this.setState({auth:false });
     }
    }
    render() {
     return (
       <BrowserRouter>
        <Switch>
         <Route exact path="/createnew" component={this.props.token ? NewBlog : LoginPage} />
         <Route exact path = '/login' component={LoginPage}/>
         <Route exact path="/" component={HomePage} />
         <Route exact path = '/blog/:slug' component={BlogDetail}/>
         <Route exact path = '/signup/' component={Signup}/>
         <Route exact path = '/profile' component={this.props.token ? ProfilePage : LoginPage} />
         <Route exact path = '/profile/edit' component={this.props.token ? EditProfile : LoginPage} />
        </Switch>
       </BrowserRouter>
        );
      }
     }

const mapStateToProps = state => {
      return {
        token: state.token
      }
}
  
export default connect(mapStateToProps)(BaseRouter);
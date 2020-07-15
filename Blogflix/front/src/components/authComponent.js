import React  from 'react';
import { withRouter } from 'react-router';
import * as Cookie from "js-cookie";

export default function requireAuth(Component) {
class AuthenticatedComponent extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   auth: Cookie.get('xxx')
  }
 }
 componentDidMount() {
  this.checkAuth();
 }
 checkAuth() {
  const location = this.props.location;
  const redirect = location.pathname + location.search;
  if ( ! Cookie.get('xxx')) {
   this.props.history.push(`/login?redirect=${redirect}`);
  }
 }
render() {
  return Cookie.get('xxx')
   ? <Component { ...this.props } />
   : null;
  }
 }
 return  withRouter(AuthenticatedComponent)
}
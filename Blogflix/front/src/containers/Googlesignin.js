import React from 'react';

class Oauth extends React.Component{
    googleSDK() {
 
        window['googleSDKLoaded'] = () => {
          window['gapi'].load('auth2', () => {
            this.auth2 = window['gapi'].auth2.init({
              client_id: '849906640607-rot890jh0ubg1qi93b73uevcdisq8ld4.apps.googleusercontent.com',
              cookiepolicy: 'single_host_origin',
              scope: 'profile email'
            });
            this.prepareLoginButton();
          });
        }
       
        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
       
      }
      componentDidMount() {
        this.googleSDK();
      }
      prepareLoginButton = () => {
 
        console.log(this.refs.googleLoginBtn);
         
        this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
            (googleUser) => {
         
            let profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            //YOUR CODE HERE
         
         
            }, (error) => {
            alert(JSON.stringify(error, undefined, 2));
            });
         
        }
render(){
    return(
        <div>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<meta name="google-signin-client_id" content="849906640607-rot890jh0ubg1qi93b73uevcdisq8ld4.apps.googleusercontent.com"></meta>

<div className="row mt-5"> 
<div className="col-md-12">
  <div className="card mt-3">
    <div className="card-body">
      <div className="row mt-5 mb-5">
        <div className="col-md-4 mt-2 m-auto ">
          <button className="g-signin2" ref="googleLoginBtn">
            Login
          </button>
        </div>    
      </div>  
    </div>
  </div>
</div>
</div>
</div>
    );
};
}

export default Oauth;
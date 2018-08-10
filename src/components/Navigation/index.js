import React from 'react';

import { connect } from 'react-redux';

//import SignOut from '../SignOut';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase'


  

const styles = {
  title: {
    cursor: 'pointer',
  },
  Notifications: {
    width: '300px',
  },
  SignOut: {
    height: '23px',
    width: '23px',
  },
};
const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>

<div class="w3-row w3-padding w3-theme-d2 w3-xlarge w3-top">

  <div class="w3-quarter">
    <div class="w3-bar">
      <a href="#" title=" devops page" className="w3-bar-item w3-button"><i className="fas fa-chalkboard"></i></a>
    </div>
  </div>

  <div class="w3-quarter">
  <a href="#" title=" devops page" className="w3-bar-item w3-button"><i className="fa fa-bars"></i></a>
  </div>

  <div class="w3-quarter">
    <div class="w3-bar w3-xlarge">
      <a href="#" className="w3-bar-item w3-button w3-left"><i className="fa fa-search"></i></a>
      <a href="#"  
       onClick= {() => {
        auth.doSignOut().then(()=>{
           console.log("logout done")
        }).catch(error => {
            console.log("Sign-out error");
        })}
       }
       class="w3-bar-item w3-button w3-right"
       ><i class="fas fa-hand-point-down" title="Options"></i></a>
    </div>

  </div>
</div>




const NavigationNonAuth = () =>
<div class="w3-row w3-padding w3-theme-d2 w3-xlarge">
  <div class="w3-half">
    <div class="w3-bar">
      <a href="https://adysenlab.github.io/" title="Dev ops page" class="w3-bar-item w3-button w3-left"><i className="fas fa-chalkboard"></i></a>
    </div>
  </div>

 

  <div class="w3-half">
    <div class="w3-bar w3-xlarge">
      
      <a href={routes.LANDING} title="main page"class="w3-bar-item w3-button w3-right"><i class="fas fa-hands"></i></a>
    </div>

  </div>
</div>


const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);



import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from "../actions/userActions.js"
import { logout } from "../actions/userActions.js"
class Admin extends React.Component {

componentDidMount() {
    this.props.getCurrentUser()
}
render(){
  
    return (
      <div >
        { this.props.loggedIn ?         
        <Switch>
          <Route exact path='/logout' component={Logout}/>
        </Switch> 
        
        :
        
        <Switch>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/login' component={Login}/>
      </Switch> }

      </div>
    );

  }

}
const mapStateToProps = state => {
    return ({
      loggedIn: !!state.currentUser
    })
}
const dispatchToProps = (dispatch) => {
    return {
      getCurrentUser: () => dispatch(getCurrentUser()),
      logout: () => dispatch(logout())
    }
  }

export default connect(mapStateToProps, dispatchToProps)(Admin);
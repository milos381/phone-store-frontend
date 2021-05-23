import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from "../actions/userActions.js"
class Admin extends React.Component {

}
const mapStateToProps = state => {
    return ({
      loggedIn: !!state.currentUser
    })
}

export default connect(mapStateToProps, { getCurrentUser })(Admin);
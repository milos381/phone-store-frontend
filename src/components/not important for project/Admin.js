// import React, { Component } from 'react';
// import axios from 'axios'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import Login from './Login'
// import Signup from './Signup'

// class Admin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       isLoggedIn: false,
//       user: {}
//      };
//   }
// componentDidMount() {
//     this.loginStatus()
//   }
// loginStatus = () => {
//     axios.get('http://localhost:3000/logged_in', {withCredentials: true})
//     .then(response => {
//       if (response.data.logged_in) {
//         this.handleLogin(response)
//       } else {
//         this.handleLogout()
//       }
//     })
//     .catch(error => console.log('api errors:', error))
//   }
// handleLogin = (data) => {
//     this.setState({
//       isLoggedIn: true,
//       user: data.user
//     })
//   }
// handleLogout = () => {
//     this.setState({
//     isLoggedIn: false,
//     user: {}
//     })
//   }
// render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <Switch>
//             <Route 
//               exact path='/login' 
//               render={props => (
//               <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
//               )}
//             />
//             <Route 
//               exact path='/signup' 
//               render={props => (
//               <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
//               )}
//             />
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }
// export default Admin;
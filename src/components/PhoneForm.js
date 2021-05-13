import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPhones } from '../actions/phoneActions';
import PhoneList from './PhoneList';
class App extends Component {  
  showOnClick = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state)
    this.setState({
      name: ''
    });
  } 
  
  componentDidMount() {
    this.props.fetchPhones()
  }
  render() {
    return (
      <div>
        <h2>WELCOME TO OUR STORE</h2>
      <div>
        <h4>CLICK HERE TO ADD NEW PHONES</h4>
        <button> click here </button>
      </div>
      <div>
        <h4>CLICK HERE TO REMOVE PHONES</h4>
        <button> click here </button>
      </div>
      <div className="App">
        
        <h4>CLICK BELOW FOR OUR PHONE OFFER</h4>
        <button> click here </button>
       {<PhoneList phones={this.props.phones} loading={this.props.loading}/>}
      </div>
      </div>
    );
  }
} 
const mapStateToProps = (state) => {
   
  return {
    phones: state.phones,
    loading: state.loading
  }
}
const dispatchToProps = (dispatch) => {
  return {
    fetchPhones: () => dispatch(fetchPhones())
  }
}

export default connect (mapStateToProps, dispatchToProps)(App)
/*
.then(() => { console.log("World!"); })
  .then(() => {
    sleep(2000)
      .then(() => { console.log("Goodbye!"); })
    });    */

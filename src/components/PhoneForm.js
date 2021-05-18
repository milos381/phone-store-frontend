import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPhones } from '../actions/phoneActions';
import { createPhone } from '../actions/phoneActions';
import PhoneList from './PhoneList';

class App extends Component {  
  state = {
    make: '',
    model: '',
    price: 0
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createPhone(this.state)
    this.setState({
      make: '',
      model: '',
      price: 0
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
        <h4>ADD A NEW PHONE</h4>
        <div>
        <form onSubmit={this.handleOnSubmit} >
          <input
            name="make"
            type="text"
            value={this.state.make}
            onChange={this.handleOnChange} /><br/>
            <input
            name="model"
            type="text"
            value={this.state.model}
            onChange={this.handleOnChange} /><br/>
            <input
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.handleOnChange} /><br/><br/>
          <input type="submit" />
        </form>
      </div>
      </div>
      <div>
        <h4>CLICK HERE TO REMOVE PHONES</h4>
        <button> click here </button>
      </div>
      <div id="showPhones">
        
        <h4>SEE BELOW OUR PHONE OFFER</h4>
        
        <PhoneList phones={this.props.phones} loading={this.props.loading}/>
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
    createPhone: phone => dispatch(createPhone(phone)),
    fetchPhones: () => dispatch(fetchPhones())
    
  }
}

export default connect (mapStateToProps, dispatchToProps)(App)

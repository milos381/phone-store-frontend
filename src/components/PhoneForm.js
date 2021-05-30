import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPhones } from '../actions/phoneActions';
import { createPhone } from '../actions/phoneActions';
import {removePhone} from '../actions/phoneActions'
import './CardClass.css';
class App extends Component {  
  state = {
    make: '',
    model: '',
    img_url: '',
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
      img_url: '',
      price: 0
    });
    
  }
  
  componentDidMount() {
    this.props.fetchPhones()
  }
  render() {
    return (
      <div>
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
            onChange={this.handleOnChange} /><br/>
            <input
            name="img_url"
            type="text"
            value={this.state.img_url}
            onChange={this.handleOnChange} /><br/><br/>
          <input type="submit" />
        </form>
        {
            (this.props.loading === true) ? 'LOADING PHONES...' : this.props.phones.map(phone => <div className = "phoneClass" key={phone.id}> <div>{phone.make}</div> <div>{phone.model}</div><div>{phone.price}</div> <div><img className="img" src={phone.img_url} alt={phone.model} /></div><button onClick={() => this.props.removePhone(phone)}>Delete</button></div>)
        }
      </div>
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
    fetchPhones: () => dispatch(fetchPhones()),
    removePhone: phone => dispatch(removePhone(phone))
  }
}

export default connect (mapStateToProps, dispatchToProps)(App)

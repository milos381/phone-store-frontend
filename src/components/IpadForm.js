import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchIpads } from '../actions/ipadActions';
import { createIpads } from '../actions/ipadActions';
import { removeIpad } from '../actions/ipadActions'

class IpadForm extends Component {  
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
    this.props.createIpads(this.state)
    this.setState({
      make: '',
      model: '',
      price: 0
    });
    
  }
  
  componentDidMount() {
    this.props.fetchIpads()
  }
  render() {
    return (
      <div>
        <h2>STORE MANAGER PAGE</h2>
      <div>
        <h4>ADD A NEW IPAD</h4>
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
        {
            (this.props.loading === true) ? 'LOADING IPADS...' : this.props.ipads.map(ipad => <div className = "ipadClass" key={ipad.id}> <div>{ipad.make}</div> <div>{ipad.model}</div><div>{ipad.price}</div> <button onClick={() => this.props.removeIpad(ipad)}>Delete</button></div>)
        }
      </div>
      </div>
      </div>
    );
  }
} 
const mapStateToProps = (state) => {
   
  return {
    ipads: state.ipads,
    loading: state.loading
  }
}
const dispatchToProps = (dispatch) => {
  return {
    createIpads: ipad => dispatch(createIpads(ipad)),
    fetchIpads: () => dispatch(fetchIpads()),
    removeIpad: ipad => dispatch(removeIpad(ipad))
  }
}

export default connect (mapStateToProps, dispatchToProps)(IpadForm)

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchMacBooks } from '../actions/macBookActions';
import { createMacBook } from '../actions/macBookActions';
import { removeMacBook } from '../actions/macBookActions'
import './CardClass.css';
class MacBookForm extends Component {  
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
    this.props.createMacBook(this.state)
    this.setState({
      make: '',
      model: '',
      img_url: '',
      price: 0
    });
    
  }
  
  componentDidMount() {
    this.props.fetchMacBooks()
  }
  render() {
    return (
      <div>
      <div>
        <h4>ADD A NEW MAC</h4>
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
            (this.props.loading === true) ? 'LOADING MACBOOKS...' : this.props.macbooks.map(macbook => <div className = "macbookClass" key={macbook.id}> <div>{macbook.make}</div> <div>{macbook.model}</div><div>{macbook.price}</div> <div><img className="imgMacbook" src={macbook.img_url} alt={macbook.model} /></div> <button onClick={() => this.props.removeMacBook(macbook)}>Delete</button></div>)
        }
      </div>
      </div>
      </div>
    );
  }
} 
const mapStateToProps = (state) => {
   
  return {
    macbooks: state.macbooks,
    loading: state.loading
  }
}
const dispatchToProps = (dispatch) => {
  return {
    createMacBook: macbook => dispatch(createMacBook(macbook)),
    fetchMacBooks: () => dispatch(fetchMacBooks()),
    removeMacBook: macbook => dispatch(removeMacBook(macbook))
  }
}

export default connect (mapStateToProps, dispatchToProps)(MacBookForm)

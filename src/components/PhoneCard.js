import React, { Component } from 'react'
import { fetchPhones } from '../actions/phoneActions';
import { connect } from 'react-redux'
class PhoneCard extends Component {
  componentDidMount() {
    this.props.fetchPhones()
  }

  render () {
    return (
        <div>
             {!(this.props.phone) ? 'LOADING PAGE...' : <div><div>{this.props.phone.make}</div><div>{this.props.phone.model}</div><div>{this.props.phone.price}</div></div>  /* { (this.props === false) ? 'LOADING...' : this.props.macbook.make} */}
        </div> 
    )
  }
}
  const mapStateToProps = (state, ownProps) => {
   
   return {phone: state.phones.find(phone => phone.id === parseInt(ownProps.match.params.id, 10))}
}
  const dispatchToProps = (dispatch) => {
    return {
      fetchPhones: () => dispatch(fetchPhones())
    }
  }
  
  export default connect (mapStateToProps, dispatchToProps)(PhoneCard)
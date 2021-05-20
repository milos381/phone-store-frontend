import React from 'react';
import { connect } from 'react-redux'
import { fetchPhones } from '../actions/phoneActions';
//import PhoneForm from './PhoneForm';
class PhoneList extends React.Component {
  componentDidMount() {
    this.props.fetchPhones()
  }
  render() {
    console.log(this)
    return (
      <div>
      <div>
        {/* { <PhoneForm/>} */}
      </div><br/><br/><br/>
      <div>
        {
            (this.props.loading === true) ? 'LOADING PHONES...' : this.props.phones.map(phone => <div className = "phoneClass" key={phone.id}> <div>{phone.make}</div> <div>{phone.model}</div><div>{phone.price}</div> </div>)
        }
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
export default connect (mapStateToProps, dispatchToProps)(PhoneList)

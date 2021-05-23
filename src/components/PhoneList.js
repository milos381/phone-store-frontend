import React from 'react';
import { connect } from 'react-redux'
import { fetchPhones } from '../actions/phoneActions';
import { Link } from 'react-router-dom'
import './Showpage.css';
//import PhoneForm from './PhoneForm';
class PhoneList extends React.Component {
  componentDidMount() {
    this.props.fetchPhones()
  }
  render() {
    console.log(this.props.phones)
    return (
      <div>
      <div>
        {/* { <PhoneForm/>} */}
      </div><br/><br/><br/>
      <div>
        {
          (this.props.loading === true) ? 'LOADING PHONES...' : this.props.phones.map(phone => (
            <div className = "macbookClass" key={phone.id} > 
              <Link to={`/phones/${phone.id}`}> 
                <div className='showpage'>{phone.make}</div>     
                <div className='showpage'>{phone.model}</div>
              </Link>
            </div>
          ))
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

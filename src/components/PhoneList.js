import React from 'react';
import { connect } from 'react-redux'
import { fetchPhones } from '../actions/phoneActions';
import { Link } from 'react-router-dom'
import './CardClass.css';
class PhoneList extends React.Component {
  componentDidMount() {
    this.props.fetchPhones()
  }
  render() {
    return (
      <div>
      <div>
        {
          (this.props.loading === true) ? 'LOADING PHONES...' : this.props.phones.map(phone => (
            <div className = "macbookClass" key={phone.id} > 
              <Link to={`/phones/${phone.id}`}>    
                <div className='showpage'><h4>{phone.model}</h4></div>
                <div>{<img className="imgCard" src={phone.img_url} alt={phone.model}></img>}</div>
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

import IpadForm from './IpadForm';
import MacBookForm from './MacBookForm';
import PhoneForm from './PhoneForm';
import React from 'react';
import { connect } from 'react-redux'
import { fetchPhones } from '../actions/phoneActions';
import { fetchMacBooks } from '../actions/macBookActions';
import { fetchIpads } from '../actions/ipadActions';
import './Showpage.css';
class Settings extends React.Component {
  componentDidMount() {
    this.props.fetchPhones()
    this.props.fetchMacBooks()
    this.props.fetchIpads()
  }
  render() {
    console.log(this.props.phones)
    return (
      <div>
      <div>
        { <PhoneForm/>}
      </div><br/>
      <div>
        { <MacBookForm/>}
      </div><br/>
      <div>
        { <IpadForm/>}
      </div><br/><br/><br/>
      </div>
    );
  }
} 
const mapStateToProps = (state) => {
   
  return {
    phones: state.phones,
    ipads: state.ipads,
    macbooks: state.macbooks,
    loading: state.loading
  }
}
const dispatchToProps = (dispatch) => {
  return {
    fetchPhones: () => dispatch(fetchPhones()),
    fetchMacBooks: () => dispatch(fetchMacBooks()),
    fetchIpads: () => dispatch(fetchIpads())
  }
}
export default connect (mapStateToProps, dispatchToProps)(Settings)

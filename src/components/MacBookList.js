import React from 'react';
import { connect } from 'react-redux'
import { fetchMacBooks } from '../actions/macBookActions';
//import MacBookForm from './MacBookForm';
class MacBookList extends React.Component {
  componentDidMount() {
    this.props.fetchMacBooks()
  }
  render() {
    console.log(this)
    return (
      <div>
      <div>
        {/* { <MacBookForm/>} */}
      </div><br/><br/><br/>
      <div>
        {
            (this.props.loading === true) ? 'LOADING MACBOOKS...' : this.props.macbooks.map(macbook => <div className = "macbookClass" key={macbook.id}> <div>{macbook.make}</div> <div>{macbook.model}</div><div>{macbook.price}</div> </div>)
        }
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
    fetchMacBooks: () => dispatch(fetchMacBooks())
  }
}
export default connect (mapStateToProps, dispatchToProps)(MacBookList)

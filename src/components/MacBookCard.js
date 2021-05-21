import React from 'react'
import { fetchMacBooks } from '../actions/macBookActions';
import { connect } from 'react-redux'
const MacBookCard = (macbook) => {

    return (
        <div>
          <h5>{macbook.make}</h5>
          <h3>{macbook.model}</h3>
          <h6>{macbook.price}</h6>
        </div> 
    )
  }
  const mapStateToProps = (state, {ownProps}) => {
      console.log(state)
      console.log(ownProps)
  }
  const dispatchToProps = (dispatch) => {
    return {
      fetchMacBooks: () => dispatch(fetchMacBooks())
    }
  }
  
  export default connect (mapStateToProps, dispatchToProps)(MacBookCard)
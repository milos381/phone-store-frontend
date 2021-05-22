import React, { Component } from 'react'
import { fetchMacBooks } from '../actions/macBookActions';
import { connect } from 'react-redux'
class MacBookCard extends Component {
  componentDidMount() {
    this.props.fetchMacBooks()
  }

  render () {
    return (
        <div>
             {!(this.props.macbook) ? 'LOADING PAGE...' : <div><div>{this.props.macbook.make}</div><div>{this.props.macbook.model}</div><div>{this.props.macbook.price}</div></div>  /* { (this.props === false) ? 'LOADING...' : this.props.macbook.make} */}
        </div> 
    )
  }
}
  const mapStateToProps = (state, ownProps) => {
   
   return {macbook: state.macbooks.find(macbook => macbook.id === parseInt(ownProps.match.params.id, 10))}
}
  const dispatchToProps = (dispatch) => {
    return {
      fetchMacBooks: () => dispatch(fetchMacBooks())
    }
  }
  
  export default connect (mapStateToProps, dispatchToProps)(MacBookCard)
import React, { Component } from 'react'
import { fetchIpads } from '../actions/ipadActions';
import { connect } from 'react-redux'
class IpadCard extends Component {
  componentDidMount() {
    this.props.fetchIpads()
  }

  render () {
    return (
        <div>
             {!(this.props.ipad) ? 'LOADING SMT...' : <div><div>{this.props.ipad.make}</div><div>{this.props.ipad.model}</div><div>{this.props.ipad.price}</div></div>  /* { (this.props === false) ? 'LOADING...' : this.props.macbook.make} */}
        </div> 
    )
  }
}
  const mapStateToProps = (state, ownProps) => {
   
   return {ipad: state.ipads.find(ipad => ipad.id === parseInt(ownProps.match.params.id, 10))}
}
  const dispatchToProps = (dispatch) => {
    return {
      fetchIpads: () => dispatch(fetchIpads())
    }
  }
  
  export default connect (mapStateToProps, dispatchToProps)(IpadCard)
import React from 'react';
import { connect } from 'react-redux'
import { fetchIpads } from '../actions/ipadActions';
//import IpadForm from './IpadForm';
class IpadList extends React.Component {
  componentDidMount() {
    this.props.fetchIpads()
  }
  render() {
    return (
      <div>
      <div>
        {/* { <IpadForm/>} */}
      </div><br/><br/><br/>
      <div>
        
        {
            
            (this.props.loading === true) ? 'LOADING IPADS...' : this.props.ipads.map(ipad => <div className = "ipadClass" key={ipad.id}> <div>{ipad.make}</div> <div>{ipad.model}</div><div>{ipad.price}</div> </div>)
        }
      </div>

      </div>
    );
  }
} 
const mapStateToProps = (state) => {
  return {
    ipads: state.ipads,
    loading: state.loading
  }
}
const dispatchToProps = (dispatch) => {
  return {
    fetchIpads: () => dispatch(fetchIpads())
  }
}
export default connect (mapStateToProps, dispatchToProps)(IpadList)

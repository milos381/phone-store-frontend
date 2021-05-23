import React from 'react';
import { connect } from 'react-redux'
import { fetchIpads } from '../actions/ipadActions';
import { Link } from 'react-router-dom'
import './Showpage.css';
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
            
            (this.props.loading === true) ? 'LOADING IPADS...' : this.props.ipads.map(ipad => (
              <div className = "macbookClass" key={ipad.id} > 
                  <Link to={`/ipads/${ipad.id}`}> 
                    <div className='showpage'>{ipad.make}</div>     
                    <div className='showpage'>{ipad.model}</div>
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

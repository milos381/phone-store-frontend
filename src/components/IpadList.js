import React from 'react';
import { connect } from 'react-redux'
import { fetchIpads } from '../actions/ipadActions';
import { Link } from 'react-router-dom'
import './CardClass.css';
class IpadList extends React.Component {
  componentDidMount() {
    this.props.fetchIpads()
  }
  render() {
    return (
      <div>
      <div>
        
        {
            
            (this.props.loading === true) ? 'LOADING IPADS...' : this.props.ipads.map(ipad => (
              <div className = "macbookClass" key={ipad.id} > 
                  <Link to={`/ipads/${ipad.id}`}> 
                  <div className='showpage'><h4>{ipad.model}</h4></div>
                <div>{<img className="imgCard" src={ipad.img_url} alt={ipad.model}></img>}</div>
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

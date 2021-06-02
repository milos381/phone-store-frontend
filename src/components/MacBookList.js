import React from 'react';
import { connect } from 'react-redux'
import { fetchMacBooks } from '../actions/macBookActions';
import { Link } from 'react-router-dom'
import './CardClass.css';
class MacBookList extends React.Component {
  componentDidMount() {
    this.props.fetchMacBooks()
  }
  render() {
    return (
      <div>
      <div>
        {
            (this.props.loading === true) ? 'LOADING MACBOOKS...' : this.props.macbooks.map(macbook => (
              <div className = "macbookClass" key={macbook.id} > 
                  <Link to={`/computers/${macbook.id}`}> 
                  <div className='showpage'><h4>{macbook.model}</h4></div>
                <div>{<img className="imgCardMacbook" src={macbook.img_url} alt={macbook.model}></img>}</div>
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

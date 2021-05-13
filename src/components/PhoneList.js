import React from 'react';

class PhoneList extends React.Component {
    
  render() {
    return (
      <div>
        {
            (this.props.loading === true) ? 'LOADING PHONES...' : this.props.phones.map(phone => <div key={phone.id}> <div>{phone.name}</div> <div>{phone.model}</div><div>{phone.price}</div> </div>)
        }
      </div>
    );
  }
} 
export default PhoneList
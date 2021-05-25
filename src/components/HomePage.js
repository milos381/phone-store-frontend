import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import PhoneList from '../components/PhoneList';
  import MacBookList from '../components/MacBookList';
  import IpadList from '../components/IpadList';
  import MacBookCard from '../components/MacBookCard';
  import IpadCard from '../components/IpadCard';
  import PhoneCard from '../components/PhoneCard';
  import appleLogoBig from '../images/appleLogo.jpg'
 // import Admin from '../components/Admin';
  import './HomePage.css';
  class HomePage extends Component {
    render() {
      return (
        <div>
        <div>

        </div>
        <Router>
        <div>
          <nav>
            <div id="menu">
              <div className="divCon">
              <img className = "navLogo" src="https://img.icons8.com/carbon-copy/50/000000/mac-os.png" alt="apple"/>
                <Link to="/" className="textUnder">Home</Link>
              </div>
              <div className="divCon">
              <img className = "navLogo" src="https://img.icons8.com/carbon-copy/50/000000/iphone-x.png" alt="apple"/>
                <Link to="/phones" className="textUnder">Iphone</Link>
              </div>
              <div className="divCon">
              <img className = "navLogo" src="https://img.icons8.com/carbon-copy/50/000000/ipad.png" alt="apple"/>
                <Link to="/ipads" className="textUnder">Ipad</Link>
              </div>
              <div className="divCon">
              <img className = "navLogo" src="https://img.icons8.com/ios/50/000000/macbook.png" alt="apple"/>
                <Link to="/computers" className="textUnder">MacBook</Link>
              </div>
              {/* <li>
                <Link to="/admin">Admin</Link>
              </li> */}
            </div>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          {<Switch>
            
            <Route exact path="/phones">
              <PhoneList />
            </Route>
            <Route path="/phones/:id" component={PhoneCard}/>

            <Route exact path="/computers">
              <MacBookList />
            </Route>
            <Route path="/computers/:id" component={MacBookCard}/>

            <Route exact path="/ipads">
              <IpadList />
            </Route>
            <Route path="/ipads/:id" component={IpadCard}/>

            {/* <Route exact path="/admin">
              <Admin />
            </Route> */}
            {/* <Route path="/">
              <HomePage />
            </Route> */}
          </Switch>}
        </div>
      </Router>
      <div>
        <img src={appleLogoBig} alt="appleLogoBig"/>
      </div>
      </div>
      );
    }
  }
export default HomePage


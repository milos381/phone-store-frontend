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
  import './HomePage.css';
  class HomePage extends Component {
    render() {
      return (
        <Router>
        <div>
          <nav>
            <ul id="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/phones">Iphone</Link>
              </li>
              <li>
                <Link to="/ipads">Ipad</Link>
              </li>
              <li>
                <Link to="/computers">MacBook</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          {<Switch>
            <Route path="/phones">
              <PhoneList />
            </Route>
            <Route exact path="/computers">
              <MacBookList />
            </Route>
            <Route path="/computers/:id" component={MacBookCard}/>
            <Route path="/ipads">
              <IpadList />
            </Route>
            {/* <Route path="/">
              <HomePage />
            </Route> */}
          </Switch>}
        </div>
      </Router>
      );
    }
  }
export default HomePage


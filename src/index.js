import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Login from './renderer/components/loginPage/Login'
import Agreement from './renderer/components/higherPurchasePage/Pages/agreement/index'
import Items from './renderer/components/higherPurchasePage/Pages/items/index'
import Payments from './renderer/components/higherPurchasePage/Pages/payments/index'
import Reports from './renderer/components/higherPurchasePage/Pages/reports/index'
import Customer from './renderer/components/customerPage/index';
import higherPurchase from './renderer/components/higherPurchasePage/index';
import * as serviceWorker from './serviceWorker';
import NotFound from './renderer/views/NotFound';
//i//mport items from './renderer/components/higherPurchasePage/Pages/items';
//import HigherPurchase from './components/views/higherPurchase';

const routing = (
    <Router>
      <div>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/higherPurchase">Higher Purchase</Link>
        </li>
      </ul> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/higherPurchase" component={higherPurchase} />
        <Route exact path="/higherPurchase/items" component={Items}/>
        <Route exact path="/higherPurchase/payments" component={Payments}/>
        <Route exact path="/higherPurchase/agreement" component={Agreement}/>
        <Route exact path="/higherPurchase/reports" component={Reports}/>
        <Route component={NotFound} />
      </Switch>
        
      </div>
    </Router>
  )

ReactDOM.render( routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/inventory/Inventory';
import OrderOnShipping from './components/OrderReview/OrderOnShipping';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      {/* <Header></Header>
      <Shop></Shop> */}

      <Router>
        <Header></Header>

        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path="/orders">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/orderReview">
            <Inventory></Inventory>
          </Route>
          <Route path="/OrderOnShipping">
            <OrderOnShipping></OrderOnShipping>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

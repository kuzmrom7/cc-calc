import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Wrap } from './common';
import Cart from './features/cart/Cart';

export type ProductCartType = {
  [id: string]: {
    count: number;
  };
};

function App() {
  return (
    <Router>
      <Wrap>
        <Switch>
          <Route path="/">
            <Cart />
          </Route>
        </Switch>
      </Wrap>
    </Router>
  );
}

export default App;

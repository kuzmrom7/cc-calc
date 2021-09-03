import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './common/header/Header';
import { Wrap } from './common/wrap/Wrap';
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
        <Header />
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

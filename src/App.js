import './App.css';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart, Orders } from './views';

function App() {
  return (
    <div className="container">
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cart" exact>
        <Cart />
      </Route>
      <Route path="/orders" exact>
        <Orders />
      </Route>
    </div>
  );
}

export default App;

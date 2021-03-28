import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button } from '../../components';
import { pizzasSelectors } from '../../redux/pizzas';
import s from './Header.module.css';

function Header() {
  const { totalCount, totalPrice } = useSelector(pizzasSelectors.getCart);

  return (
    <div className={s.container}>
      <Link className={s.logoContainer} to="/">
        <div className={s.logo}>
          <img
            className={s.logoImage}
            src={logo}
            alt="PizzaBar logo"
            width="120"
          />
          <h1 className={s.logoText}>PizzaBar</h1>
        </div>
      </Link>
      <div className={s.buttons}>
        <Link className={s.cartButton} to="/cart">
          <Button>
            <p>Cart:</p>
            <p>pizzas - {totalCount}</p>
            <p>price - {totalPrice} $</p>
          </Button>
        </Link>
        <Link to="/orders">
          <Button>Orders</Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;

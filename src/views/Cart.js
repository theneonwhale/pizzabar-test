import { Button, CartItem } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './Cart.module.css';

import { pizzasActions, pizzasSelectors } from '../redux/pizzas';

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector(pizzasSelectors.getCartItems);
  const allPizzas = useSelector(pizzasSelectors.getCartAllPizzas);
  const { totalCount, totalPrice } = useSelector(pizzasSelectors.getCart);

  const pizzas = Object.keys(items).map(key => {
    return {
      ...items[key][0],
      count: items[key].length,
    };
  });

  const ingredients = allPizzas.reduce((acc, pizza) => {
    acc = [...acc, ...Object.entries(pizza.ingredients)];
    return acc;
  }, []);

  const cart = {
    items: pizzas,
    allPizzas,
    ingredients,
  };

  const handleClearCart = () => {
    if (window.confirm('Clear cart?')) {
      dispatch(pizzasActions.clearCart());
    }
  };

  const handleMakeOrder = () => {
    if (window.confirm('Make order?')) {
      dispatch(pizzasActions.addCartToOrders(cart));

      dispatch(pizzasActions.clearCart());
    }
  };

  return (
    <div className={s.cartContainer}>
      <h2 className={s.cartTitle}>Cart</h2>
      {pizzas &&
        Object.values(pizzas).map(({ name, price, count }) => (
          <CartItem key={name} name={name} price={price} count={count} />
        ))}
      <div className={s.cartCredits}>
        <p className={s.cartCreditItem}>
          Total pizzas: <span className={s.cartCreditNumber}>{totalCount}</span>
        </p>
        <p className={s.cartCreditItem}>
          Total price: <span className={s.cartCreditNumber}>{totalPrice}</span>{' '}
          $
        </p>
      </div>
      <div className={s.cartButtons}>
        <div className={s.cartButton}>
          <Button onClick={handleClearCart}>Clear cart</Button>
        </div>
        <div className={s.cartButton}>
          <Button onClick={handleMakeOrder}>Make order</Button>
        </div>
      </div>
      <Link className={s.cartBack} to="/">
        <span>Back</span>
      </Link>
    </div>
  );
}

export default Cart;

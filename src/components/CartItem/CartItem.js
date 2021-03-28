
import s from './CartItem.module.css';

function CartItem({ id, name, price, count }) {
  return (
    <div className={s.cartItem}>
      <p className={s.pizzaName}>{name}</p>
      <p className={s.pizzaCount}>{count}</p>
      <p className={s.pizzaTotalPrice}>{count * price} $</p>
    </div>
  );
}

export default CartItem;

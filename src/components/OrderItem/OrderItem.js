import s from './OrderItem.module.css';

function OrderItem({ date, items }) {
  const orderDate = new Date(Number(date));
  const dateToShow = orderDate.toString().split(' ').splice(1, 4).join(' ');

  return (
    <div>
      <ul className={s.ordersList}>
        {items && (
          <p className={s.orderItemTitle}>
            Order from <span className={s.orderDate}>{dateToShow}</span>
          </p>
        )}
        {items &&
          items.map(({ name, count, price }) => (
            <li className={s.orderItem} key={name}>
              <p className={s.pizzaName}>{name}</p>
              <p className={s.pizzaCount}>{count}</p>
              <p className={s.pizzaPrice}>{count * price} $</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default OrderItem;

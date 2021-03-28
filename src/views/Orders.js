import { Button, OrderItem, Statistics } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { pizzasActions, pizzasSelectors } from '../redux/pizzas';
import { getPizzaInfo } from '../services/pizza-statistics';
import s from './Orders.module.css';

function Orders() {
  const dispatch = useDispatch();

  const items = useSelector(pizzasSelectors.getOrders);
  const allPizzas = useSelector(pizzasSelectors.getOrdersAllPizzas);
  const pizzas = useSelector(pizzasSelectors.getPizzas);

  const price = allPizzas.reduce((sum, pizza) => (sum += pizza.price), 0);

  const { popularPizzas, popularIngredients } = getPizzaInfo(allPizzas, pizzas);

  const handleClearOrders = () => {
    if (window.confirm('Clear orders?')) {
      dispatch(pizzasActions.clearOrders());
    }
  };

  return (
    <div className={s.ordersContainer}>
      <div className={s.ordersInfo}>
        <div className={s.orders}>
          <h2 className={s.ordersTitle}>Orders</h2>
          <div className={s.ordersLists}>
            {items &&
              Object.entries(items)
                .sort((a, b) => b[0] - a[0])
                .map(item => (
                  <OrderItem key={item[0]} date={item[0]} items={item[1]} />
                ))}
          </div>
          <div className={s.ordersCredits}>
            <p className={s.ordersCreditItem}>
              Total pizzas:{' '}
              <span className={s.ordersCreditNumber}>{allPizzas.length}</span>
            </p>
            <p className={s.ordersCreditItem}>
              Total price:{' '}
              <span className={s.ordersCreditNumber}>{price} $</span>
            </p>
          </div>
        </div>
        <div className={s.statistics}>
          <h2 className={s.statisticsTitle}>Statistics</h2>
          <Statistics
            popular={popularPizzas}
            ingredients={popularIngredients}
          />
        </div>
      </div>
      <div className={s.ordersButton}>
        <Button onClick={handleClearOrders}>Clear orders</Button>
      </div>
      <Link className={s.ordersBack} to="/">
        <span>Back</span>
      </Link>
    </div>
  );
}

export default Orders;

import PropTypes from 'prop-types';
import s from './PizzaList.module.css';
import { PizzaItem } from '../../components';
import { useDispatch } from 'react-redux';
import { pizzasActions } from '../../redux/pizzas';

function PizzaList({ items = {} }) {
  const dispatch = useDispatch();

  const handleAddToCart = pizzaObj => {
    dispatch(pizzasActions.addPizzaToCart(pizzaObj));
  };

  return (
    <div>
      <ul className={s.pizzaList}>
        {items &&
          Object.entries(items).map(pizza => {
            return (
              <PizzaItem
                key={pizza[0]}
                {...pizza[1]}
                onAddToCart={handleAddToCart}
              />
            );
          })}
      </ul>
    </div>
  );
}

PizzaList.propTypes = {
  items: PropTypes.object.isRequired,
};

export default PizzaList;

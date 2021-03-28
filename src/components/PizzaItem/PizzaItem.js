import PropTypes from 'prop-types';
import s from './PizzaItem.module.css';

import { Button } from '../../components';
import defaultImg from '../../assets/img/defaultImg.svg';

function PizzaItem({
  id,
  name = 'pizza',
  price = 0,
  imgUrl = defaultImg,
  ingredients = {},
  onAddToCart,
}) {
  const pizzaObj = {
    id,
    name,
    price,
    ingredients,
  };

  const handleAddPizza = () => {
    onAddToCart(pizzaObj);
  };

  return (
    <li className={s.pizzaItem}>
      <div className={s.pizzaDetails}>
        <img className={s.pizzaImage} src={imgUrl} alt={name} width="150" />
        <h3 className={s.pizzaTitle}>{name.toUpperCase()}</h3>
        <p className={s.pizzaPrice}>
          Price: <span className={s.pizzaCost}>{price}</span> $
        </p>
        <div className={s.pizzaIngredients}>
          <h4 className={s.pizzaIngredientsTitle}>Ingredients:</h4>
          <ul className={s.pizzaIngredientsList}>
            {ingredients &&
              Object.keys(ingredients).map(ingredient => (
                <li className={s.pizzaIngredient} key={ingredient}>
                  {ingredient}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <Button onClick={handleAddPizza}>Add to cart</Button>
    </li>
  );
}

PizzaItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  ingredients: PropTypes.object.isRequired,
};

export default PizzaItem;

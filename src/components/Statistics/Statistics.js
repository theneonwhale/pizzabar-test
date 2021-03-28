import s from './Statistics.module.css';

function Statistics({ popular, ingredients }) {
  return (
    <div className={s.statisticsContainer}>
      <div className={s.popularPizzas}>
        <h3 className={s.popularTitle}>Popular pizzas</h3>
        <ul className={s.popularList}>
          {popular &&
            popular.map(pizza => (
              <li className={s.popularPizza} key={pizza}>
                {pizza}
              </li>
            ))}
        </ul>
      </div>
      <div className={s.usedIngredients}>
        <h3 className={s.ingredientsTitle}>Used ingredients</h3>
        <ul className={s.ingredientsList}>
          {ingredients &&
            ingredients.map(ingredient => (
              <li className={s.ingredientsItem} key={ingredient[0]}>
                {ingredient[0]} - {ingredient[1]}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Statistics;

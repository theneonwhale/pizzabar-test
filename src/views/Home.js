import PropTypes from 'prop-types';
import { Categories, PizzaList } from '../components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pizzasActions, pizzasSelectors } from '../redux/pizzas';
import s from './Home.module.css';
import json from '../services/db.json';

const categoryNames = ['Meat', 'Fish', 'Vegetarian'];

function Home() {
  const dispatch = useDispatch();
  const pizzas = useSelector(pizzasSelectors.getPizzas);
  const isLoaded = useSelector(pizzasSelectors.getIsLoaded);
  const category = useSelector(pizzasSelectors.getCategory);
  useEffect(() => {
    dispatch(pizzasActions.setLoaded(false));

    if (category === null) {
      dispatch(pizzasActions.setPizzas(json.pizzas));
    } else {
      dispatch(
        pizzasActions.setPizzas(
          Object.entries(json.pizzas).reduce((acc, item) => {
            if (item[1].category === category) {
              acc[item[0]] = item[1];
            }
            return acc;
          }, {}),
        ),
      );
    }

    // server-json
    // API.fetchPizzas().then(result => {
    //   if (category === null) {
    //     dispatch(pizzasActions.setPizzas(result.data));
    //   } else {
    //     dispatch(
    //       pizzasActions.setPizzas(
    //         Object.entries(result.data).reduce((acc, item) => {
    //           if (item[1].category === category) {
    //             acc[item[0]] = item[1];
    //           }
    //           return acc;
    //         }, {}),
    //       ),
    //     );
    //   }
    // });
    // }
  }, [category, dispatch]);

  const onSelectCategory = index => {
    dispatch(pizzasActions.setCategory(index));
  };

  return (
    <div className={s.pizzasSection}>
      <h2 className={s.pizzasTitle}>Pizzas</h2>
      <div>
        <Categories items={categoryNames} onCategoryClick={onSelectCategory} />
      </div>
      <div>
        <div>{pizzas && <PizzaList items={pizzas} isLoaded={isLoaded} />}</div>
      </div>
    </div>
  );
}

Home.propTypes = {
  items: PropTypes.object,
};

export default Home;

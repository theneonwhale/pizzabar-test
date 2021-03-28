export function getPizzaInfo(lastPizzas, pizzas) {
  const popularPizzas = getPopularPizzas(lastPizzas);
  const popularIngredients = getIngredients(lastPizzas, pizzas);

  return {
    popularPizzas,
    popularIngredients,
  };
}

function getPopularPizzas(lastPizzas) {
  const pizzaCount = lastPizzas.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = 0;
    }
    acc[item.name] += 1;
    return acc;
  }, {});

  const pizzaRate = Object.entries(pizzaCount)
    .sort((a, b) => b[1] - a[1])
    .map(item => item[0]);

  const popular = pizzaRate.slice(0, 5);
  return popular;
}

function getIngredients(lastPizzas, pizzas) {


  const usedIngredients = lastPizzas
    .map(item => Object.entries(item.ingredients))
    .flat()
    .reduce((acc, item) => {
      if (!acc[item[0]]) {
        acc[item[0]] = 0;
      }
      acc[item[0]] += item[1];
      return acc;
    }, {});

  const ingredientsRate = Object.entries(usedIngredients).sort(
    (a, b) => b[1] - a[1],
  );

  return ingredientsRate;
}

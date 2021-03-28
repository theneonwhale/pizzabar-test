export const getPizzas = state => state.pizzas.items;

export const getIsLoaded = state => state.pizzas.isLoaded;

export const getSortBy = state => state.filters.sortBy;

export const getCategory = state => state.filters.category;

export const getCartItems = state => state.cart.items;

export const getCartAllPizzas = state => state.cart.allPizzas;

export const getCartTotalCount = state => state.cart.totalCount;

export const getCartTotalPrice = state => state.cart.totalPrice;

export const getCart = state => ({
  totalCount: state.cart.totalCount,
  totalPrice: state.cart.totalPrice,
});

export const getOrders = state => state.orders.items;

export const getIngredients = state => state.orders.ingredients;

export const getOrdersAllPizzas = state => state.orders.allPizzas;

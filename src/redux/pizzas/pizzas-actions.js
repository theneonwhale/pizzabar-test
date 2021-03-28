export const setSortBy = name => ({
  type: 'setSortBy',
  payload: name,
});

export const setCategory = index => ({
  type: 'setCategory',
  payload: index,
});

export const setPizzas = items => ({
  type: 'setPizzas',
  payload: items,
});

export const setLoaded = payload => ({
  type: 'setLoaded',
  payload,
});

export const addPizzaToCart = payload => ({
  type: 'addPizzaToCart',
  payload,
});

export const removeCartItem = id => ({
  type: 'removeCartItem',
  payload: id,
});

export const clearCart = () => ({
  type: 'clearCart',
});

export const addCartToOrders = payload => ({
  type: 'addCartToOrders',
  payload,
});

export const clearOrders = () => ({
  type: 'clearOrders',
});

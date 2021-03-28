import { combineReducers } from 'redux';

const initialState = {
  category: null,
  sortBy: 'popular',
};

const filters = (state = initialState, action) => {
  if (action.type === 'setSortBy') {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === 'setCategory') {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

const pizzasInitialState = {
  items: {},
  isLoaded: false,
};

const pizzas = (state = pizzasInitialState, action) => {
  switch (action.type) {
    case 'setPizzas':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case 'setLoaded':
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

const cartInitialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
  allPizzas: [],
};

const cart = (state = cartInitialState, action) => {
  switch (action.type) {
    case 'addPizzaToCart': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allPizzas = Object.values(newItems).flat();

      const totalPrice = allPizzas.reduce(
        (sum, { price }) => (sum += price),
        0,
      );

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
        allPizzas,
      };
    }

    case 'removeCartItem':
      return {
        ...state,
        items: Object.entries(state.items).reduce((acc, item) => {
          if (item[1].id !== action.payload) {
            acc[item[0]] = item[1];
          }
          return acc;
        }, {}),
      };

    case 'clearCart':
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
        allPizzas: [],
      };

    default:
      return state;
  }
};

const ordersInitialState = {
  items: {},
  allPizzas: [],
  ingredients: [],
};

const orders = (state = ordersInitialState, action) => {
  switch (action.type) {
    case 'addCartToOrders': {
      const time = new Date().getTime();
      return {
        ...state,
        items: { ...state.items, [time]: [...action.payload.items] },
        allPizzas: [...state.allPizzas, ...action.payload.allPizzas],
        ingredients: [...state.ingredients, ...action.payload.ingredients],
      };
    }
    case 'clearOrders':
      return {
        items: {},
        allPizzas: [],
        ingredients: [],
      };

    default:
      return state;
  }
};

export default combineReducers({ filters, pizzas, cart, orders });

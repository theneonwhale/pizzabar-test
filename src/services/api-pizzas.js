import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3344/pizzas';

export const fetchPizzas = () => axios.get();

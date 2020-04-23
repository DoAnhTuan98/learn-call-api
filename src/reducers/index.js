import { combineReducers } from 'redux';
import products from './products'
const appReducers = combineReducers({
    products: products
})

export default appReducers;
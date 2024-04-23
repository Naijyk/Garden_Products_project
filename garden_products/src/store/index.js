import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer } from './reducers/categoriesReducer';
import { thunk } from 'redux-thunk';
import { DiscontProductsReducer } from './reducers/salesReducer';
import { allProductsreducer } from './reducers/allProductsReducer';
import { ProductsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { cartReducer } from './reducers/cartReducer';
import { singleProductsReducer } from './reducers/singleProductReducer';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    discontProducts: DiscontProductsReducer,
    allProducts: allProductsreducer,
    productsByCategory: ProductsByCategoryReducer,
    cart: cartReducer,
    singleProduct: singleProductsReducer
});

export const store = createStore( rootReducer, applyMiddleware(thunk) );
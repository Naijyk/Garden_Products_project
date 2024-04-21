import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer } from './reducers/categoriesReducer';
import { thunk } from 'redux-thunk';
import { DiscontProductsReducer } from './reducers/salesReducer';
import { allProductsReducer } from './reducers/allProductsReducer';
import { ProductsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { singleProductReducer } from './reducers/singleProductReducer';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    discontProducts: DiscontProductsReducer,
    allProducts: allProductsReducer,
    productsByCategory: ProductsByCategoryReducer,
    singleProduct: singleProductReducer
});

export const store = createStore( rootReducer, applyMiddleware(thunk) );
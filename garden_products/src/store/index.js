import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer } from './reducers/categoriesReducer';
import { thunk } from 'redux-thunk'
import { DiscontProductsReducer } from './reducers/salesReducer';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    discontProducts: DiscontProductsReducer
});

export const store = createStore( rootReducer, applyMiddleware(thunk) );
const defaultState = [];

const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY';
const SORT_PRODUCTS = 'SORT_PRODUCTS';

export const loadProductsByCategoryAction = products => ({ type: LOAD_PRODUCTS_BY_CATEGORY, payload: products });

export const sortProductsAction = value => ({ type: SORT_PRODUCTS, payload: value });

export const ProductsByCategoryReducer = ( state = defaultState, action ) => {

    if( action.type === LOAD_PRODUCTS_BY_CATEGORY ) {
        return action.payload;
    } else if( action.type === SORT_PRODUCTS ) {
        if( action.payload === 'name' ) {
            state.sort((a, b) => a.title.localCompare(b.title))
        } else if( action.payload === 'price_asc' ) {
            state.sort((a, b) => a.price - b.price)
        } else if( action.payload === 'price_desc' ) {
            state.sort((a, b) => b.price - a.price)
        }
        return [...state]
    }
    return state;
}
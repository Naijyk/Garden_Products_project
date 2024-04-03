const defaultState = [];

const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';

export const loadAllProductsAction = allProducts => ({ type:LOAD_ALL_PRODUCTS,payload: allProducts });

export const allProductsreducer = (state = defaultState, action) => {
    if( action.type === LOAD_ALL_PRODUCTS ){
        return action.payload
    }

    return state
};
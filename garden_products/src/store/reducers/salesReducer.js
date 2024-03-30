const defaultState = [];

const LOAD_DISCONT_PRODUCTS = 'LOAD_DISCONT_PRODUCTS';

export const loadDiscontProductsAction = product => ({ type:LOAD_DISCONT_PRODUCTS, payload: product });

export const DiscontProductsReducer = (state = defaultState, action) => {
    if( action.type === LOAD_DISCONT_PRODUCTS ){
        return action.payload
    }

    return state
};
const defaultState = JSON.parse(localStorage.getItem('cart') || []);

const ADD_TO_CART = 'ADD_TO_CART';
const DECR_ITEM = 'DECR_ITEM';
const INCR_ITEM = 'INCR_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const CLEAR_CART = 'CLEAR_CART';

export const addToCartAction = product => ({ type: ADD_TO_CART, payload: product });
export const decrItemAction = id => ({ type: DECR_ITEM, payload: id });
export const incrItemAction = id => ({ type: INCR_ITEM, payload: id });
export const deleteItemAction = id => ({ type: DELETE_ITEM, payload: id });
export const clearCartAction = () => ({ type: CLEAR_CART })

const checkProduct = ( state, payload ) => {
    const productInState = state.find(el => el.id === payload.id);
    if ( productInState ) {
        productInState.count++;
        return [...state]
    } else {
        return [...state, {...payload, count: 1}]
    }
}

export const cartReducer = ( state = defaultState, action ) => {

    if ( action.type === ADD_TO_CART ) {
        return checkProduct(state, action.payload)
    } else if ( action.type === DECR_ITEM ) {
        const targetItem = state.find(el => el.id === action.payload);
        if ( targetItem.count === 1 ) {
            return state = state.filter(el => el.id !== action.payload);
        } else {
            targetItem.count--;
        }
        return [...state]
    } else if ( action.type === INCR_ITEM ) {
        const targetItem = state.find(el => el.id === action.payload);
        targetItem.count++;
        return [...state]
    } else if ( action.type === DELETE_ITEM ) {
        return state.filter(el => el.id !== action.payload);
    } else if ( action.type === CLEAR_CART ) {
        return state = [];
    }

    return state;
}
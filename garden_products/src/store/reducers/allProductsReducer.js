const defaultState = [];

const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';



export const loadAllProductsAction = allProducts => ({ type:LOAD_ALL_PRODUCTS,payload: allProducts });
export const sortProductsAction = (value) => ({type: SORT_PRODUCTS, payload: value});

export const allProductsreducer = (state = defaultState, action) => {
    if( action.type === LOAD_ALL_PRODUCTS ){
        return action.payload
    } else if(action.type === SORT_PRODUCTS){
        if(action.payload === 'price_asc'){
            state.sort((a, b) => a.price - b.price)
        }else if(action.payload === 'alphabetically'){
            state.sort((a, b) => a.title.localeCompare(b.title))
        }else if(action.payload === 'price_desc'){
            state.sort((a, b) => b.price - a.price)
        }
        return [...state]
    }

    return state
};
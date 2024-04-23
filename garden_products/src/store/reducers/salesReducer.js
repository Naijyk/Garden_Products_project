const defaultState = [];

const LOAD_DISCONT_PRODUCTS = 'LOAD_DISCONT_PRODUCTS';
const SORT_DISCONT_PRODUCTS = 'SORT_DISCONT_PRODUCTS';
const CHECK_DISCONT_PRICE = 'CHECK_DISCONT_PRICE';


export const loadDiscontProductsAction = product => ({ type:LOAD_DISCONT_PRODUCTS, payload: product });
export const sortDiscountProductsAction = (value) => ({type: SORT_DISCONT_PRODUCTS, payload: value});
export const checkDiscontPriceAction = values => ({ type:CHECK_DISCONT_PRICE, payload: values });



export const DiscontProductsReducer = (state = defaultState, action) => {
    if( action.type === LOAD_DISCONT_PRODUCTS ){
        return action.payload
    }else if(action.type === SORT_DISCONT_PRODUCTS){
        if(action.payload === 'price_asc'){
            state.sort((a, b) => a.price - b.price)
        }else if(action.payload === 'alphabetically'){
            state.sort((a, b) => a.title.localeCompare(b.title))
        }else if(action.payload === 'price_desc'){
            state.sort((a, b) => b.price - a.price)
        }
        return [...state]
    }else if (action.type === CHECK_DISCONT_PRICE){
        const {min_value, max_value} = action.payload;
        return state.map(el => {
          if(el.discont_price >= min_value && el.discont_price <= max_value){
            el.visible = true
          } else {
            el.visible = false
          }
          return el
        })
      }
    return state
};
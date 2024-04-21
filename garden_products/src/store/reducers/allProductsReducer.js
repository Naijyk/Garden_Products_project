const defaultState = [];

const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const GET_DISCOUNT_PRODUCTS = 'GET_DISCOUNT_PRODUCTS';
const CHECK_PRICE = 'CHECK_PRICE';


export const loadAllProductsAction = allProducts => ({ type:LOAD_ALL_PRODUCTS,payload: allProducts });
export const sortProductsAction = (value) => ({type: SORT_PRODUCTS, payload: value});
export const getDiscountProductsAction = value => ({ type:GET_DISCOUNT_PRODUCTS, payload: value });
export const checkPriceAction = values => ({ type:CHECK_PRICE, payload: values });


export const allProductsReducer = (state = defaultState, action) => {
    if( action.type === LOAD_ALL_PRODUCTS ){
        return action.payload.map(el => ({...el, visible: true}))
    } else if(action.type === SORT_PRODUCTS){
        if(action.payload === 'price_asc'){
            state.sort((a, b) => a.price - b.price)
        }else if(action.payload === 'alphabetically'){
            state.sort((a, b) => a.title.localeCompare(b.title))
        }else if(action.payload === 'price_desc'){
            state.sort((a, b) => b.price - a.price)
        }
        return [...state]
    }else if(action.type === GET_DISCOUNT_PRODUCTS){
        if(action.payload){
            return state.map(el => {
              if (el.discont_price !== null){
                el.visible = true
              } else {
                el.visible = false
              }
              return el
            })
          } else {
            return state.map(el => {
              el.visible = true
              return el
            })
          }
        } else if (action.type === CHECK_PRICE){
          const {min_value, max_value} = action.payload;
          return state.map(el => {
            if(el.price >= min_value && el.price <= max_value){
              el.visible = true
            } else {
              el.visible = false
            }
            return el
          })
        }

    return state
};
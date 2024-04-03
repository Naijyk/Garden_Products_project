import { loadAllProductsAction } from "../store/reducers/allProductsReducer";

export const domen = 'http://localhost:3333';

export const getAllProducts = (dispatch) => {
    fetch(`${domen}/products/all`)
    .then(res => res.json())
    .then(json => dispatch(loadAllProductsAction(json)))
}
import { loadDiscontProductsAction } from "../store/reducers/salesReducer";
import { domen } from "./categories";

export const getDiscontProducts = (dispatch) => {
    fetch(`${domen}/products/all`)
    .then(res => res.json())
    .then(json => dispatch(loadDiscontProductsAction(json)))
}

import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";
import { domen } from "./categories";

export const getProductsByCategory = id => {
    return dispatch => {
        fetch(`${domen}/categories/${id}`)
        .then(res => res.json())
        .then(json => dispatch(loadProductsByCategoryAction(json)));
    }
}
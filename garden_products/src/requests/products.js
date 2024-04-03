import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";
import { domen } from "./categories";

export const getProductsByCategory = categoryId => {
    return dispatch => {
        fetch(`${domen}/categories/${categoryId}`)
        .then(res => res.json())
        .then(json => dispatch(loadProductsByCategoryAction(json)));
    }
}
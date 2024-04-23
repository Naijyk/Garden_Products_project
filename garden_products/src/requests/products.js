import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";
import { loadSingleProductAction } from "../store/reducers/singleProductReducer";
import { domen } from "./categories";

export const getProductsByCategory = id => {
    return dispatch => {
        fetch(`${domen}/categories/${id}`)
        .then(res => res.json())
        .then(json => dispatch(loadProductsByCategoryAction(json)));
    }
}

export const getSingleProduct = id => {
    return dispatch => {
       fetch(`${domen}/products/${id}`)
          .then(res => res.json())
          .then(json => dispatch(loadSingleProductAction(json)))
    }
}
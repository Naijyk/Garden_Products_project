import { loadCategoriesAction } from "../store/reducers/categoriesReducer";

export const domen = 'http://localhost:3333';

export const getCategories = (dispatch) => {
    fetch(`${domen}/categories/all`)
    .then(res => res.json())
    .then(json => dispatch(loadCategoriesAction(json)))
}
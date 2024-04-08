import React, { useEffect } from 'react'
import { getAllProducts } from '../../requests/allProducts'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard';
import s from './index.module.css'
import { sortProductsAction } from '../../store/reducers/allProductsReducer';

export default function AllProductsPage({id, image, product}) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts)
  }, [])

  const allProductsData = useSelector(store => store.allProducts);
  

  const order = event => {
    dispatch(sortProductsAction(event.target.value))
  }

  return (
        
        <div className={['wrapper', s.products_page].join(' ')}>
          <p>All products</p>
          <label> Discounted items <input type="checkbox"/></label>
          <div className={s.sort_products}>
            <span>Sorted:</span>
            <select onInput={order}>
              <option>by default</option>
              <option value='price_desc'>by descending price</option>
              <option value='price_asc'>by ascending price</option>
              <option value='alphabetically'>alphabetically</option>
            </select>
          </div>
          <div className={s.products_card}>
            {
            allProductsData.map(el => <ProductCard key={el.id} {...el}/>)
            } 
          </div>
         
        </div>
  )
}

import React, { useEffect } from 'react'
import { getAllProducts } from '../../requests/allProducts'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard';
import s from './index.module.css'

export default function AllProductsPage({id, image, product}) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts)
  }, [])

  const allProductsData = useSelector(store => store.allProducts);

  return (
        <div className={[s.products_page, 'wrapper'].join(' ')}>
          {
            allProductsData.map(el => <ProductCard key={el.id} {...el}/>)
          }
        </div>
  )
}

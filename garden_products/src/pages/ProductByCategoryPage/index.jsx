import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../requests/products';
import ProductCard from '../../components/ProductCard';
import s from './index.module.css';

export default function ProductByCategoryPage() {

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductsByCategory(id))
  }, []);

  const productsByCategoryState = useSelector(store => store.productsByCategory);

  const { category, data } = productsByCategoryState;

  return (
    <div className={[s.products_by_category, 'wrapper'].join(' ')}>
      <h1>{ category && category.title }</h1>
      <div>
        {
          data && data.map(el => <ProductCard key={el.id} {...  el} />)
        }
      </div>

    </div>
  )
}


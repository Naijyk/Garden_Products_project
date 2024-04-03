import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../requests/products';
import ProductsByCategoryContainer from '../../components/productsByCategoryContainer';

export default function ProductByCategoryPage() {

    const dispatch = useDispatch();

    const { categoryId } = useParams();

    useEffect(() => {
        dispatch(getProductsByCategory(categoryId))
    }, []);

    const ProductsByCategoryState = useSelector(store => store.productsByCategory);

  return (
    <div>
        <ProductsByCategoryContainer ProductsByCategoryState={ProductsByCategoryState} />
    </div>
  )
}

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getSingleProduct } from '../../requests/products';
import { useParams } from 'react-router-dom'
import SingleProduct from '../../components/SingleProduct';


export default function SingleProductPage() {

    const dispatch = useDispatch();

  const { id } = useParams();
    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, []);

    const singleProductState = useSelector(store => store.singleProduct);


  return (
    <div className='wrapper'>
      {
        singleProductState.map(el => <SingleProduct key={el.id} {...el}  />)
      }
    </div>
  )
}

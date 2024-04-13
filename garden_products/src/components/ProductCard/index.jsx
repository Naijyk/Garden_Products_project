import React from 'react'
import { domen } from '../../requests/allProducts';
import s from './index.module.css'
import { Link } from 'react-router-dom';
import ProductPrice from '../ProductPrice';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/reducers/cartReducer';

export default function ProductCard({ id, image, title, price, discont_price }) {

  const dispatch = useDispatch();

  const img = domen + image;

  const discount = discont_price && (((price / discont_price) * 100) - 100).toFixed();

  return (
      <div className={s.product_card}>
        <Link to='/'>
          <img src={img} alt={title} />
          {
          discount && <p className={s.discount}>-{discount}%</p>
          }
          <div className={s.product_card_content}>
            <p>{ title }</p>
            <ProductPrice price={price}
                          discont_price={discont_price} />
          </div>
        </Link>
          <div className={s.add_to_cart_btn}
               onClick={() => dispatch(addToCartAction({ id, image, title, price, discont_price  }))}>Add to cart</div>
      </div>
  )
}

import React from 'react';
import s from './index.module.css';
import { domen } from '../../requests/categories';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/reducers/cartReducer';

export default function DiscontProductCard({ id, image, title, price, discont_price }) {

  const dispatch = useDispatch();

  const img = domen + image;

  return (
    <div className={s.discont_product_card} >
      <Link to='/'>
          <img src={img} alt={title} />
          <p className={s.discount}>-{ (((price / discont_price) * 100) - 100).toFixed() } %</p>
          <div className={s.discont_product_card_content}>
            <p>{ title }</p>
            <div>
              <p>${ discont_price }</p>
              <p>${ price }</p>
            </div>
          </div>
      </Link>
      <div className={s.add_to_cart_btn}
           onClick={() => dispatch(addToCartAction({ id, image, title, price, discont_price  }))}>Add to cart</div>
    </div>
  )
}

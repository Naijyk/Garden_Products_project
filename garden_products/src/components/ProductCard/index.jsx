import React from 'react'
import { domen } from '../../requests/allProducts';
import s from './index.module.css'
import { Link } from 'react-router-dom';
import ProductPrice from '../ProductPrice';

export default function ProductCard({ id, image, title, price, discont_price }) {

  const img = domen + image;

  const discount = discont_price && (((price / discont_price) * 100) - 100).toFixed();

  return (
    <Link to={`/product/${id}`}>
      <div className={s.product_card}>
        <img src={img} alt={title} />
        {discount && <p className={s.discount}>-{discount}%</p>}
        <div>
          <p>{ title }</p>
          <ProductPrice price={price}
                        discont_price={discont_price} />
        </div>
      </div>
    </Link>
  )
}

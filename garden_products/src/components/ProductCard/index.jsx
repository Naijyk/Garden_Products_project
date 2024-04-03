import React from 'react'
import { domen } from '../../requests/allProducts';
import s from './index.module.css'

export default function ProductCard({id, image, title, price, product}) {

  const img = domen + image;

  return (
    <div className={s.product_card}>
      <img src={img} alt={title} />
      <div>
        <p>{title}</p>
        <p>${price}</p>
      </div>
    </div>

  )
}

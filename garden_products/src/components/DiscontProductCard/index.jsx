import React from 'react';
import s from './index.module.css';
import { domen } from '../../requests/categories';
import { Link } from 'react-router-dom';

export default function DiscontProductCard({id, image, title, price, discont_price }) {

  const img = domen + image;

  return (
    <Link to={`/product/${id}`}>
      <div className={s.discont_product_card} >
        <img src={img} alt={title} />
        <p>-{ (((price / discont_price) * 100) - 100).toFixed() } %</p>
        <div className={s.discont_product_card_content}>
          <p>{ title }</p>
          <div>
            <p>${ discont_price }</p>
            <p>${ price }</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

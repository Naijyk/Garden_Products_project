import React from 'react';
import s from './index.module.css';

export default function ProductPrice({ price, discont_price }) {
  return (
    <div className={s.product_price}>
        <p className={s.current_price}>${discont_price || price}</p>

        { discont_price && <p className={s.old_price}>${price}</p> }
    </div>
  )
}

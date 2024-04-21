import React, { useState } from 'react'
import { domen } from '../../requests/allProducts';
import s from './index.module.css'

export default function SingleProduct({id, image, title, price, discont_price, description}) {
    
    const img = domen + image;
    let [ count, setCount ] = useState(0);

    const incr = () => {
        setCount(++count)
        console.log(count)
      }
    
      const decr = () => {
        setCount(--count)
        console.log(count)
      }


        const [items, setItems] = useState([]);
    
        const addItemToCart = (item) => {
            setItems([...items, item]);
        };

  return (
    <div className={s.single_product}>
        <img src={img} alt={title} />

        <section className={s.single_product_content}>
            <h3>{title}</h3>

            <div className={s.price}>
              {discont_price !== null ? (
              <>
                <p>${discont_price}</p>
                <p>${price}</p>
                <p>-{(((price / discont_price) * 100) - 100).toFixed()} %</p>
              </>) : (<p>${price}</p>)}
            </div>

            <div className={s.add_to_cart}>
                <div className={s.counter}>
                    <button onClick={decr}>-</button>
                    <span>{count}</span>
                    <button onClick={incr}>+</button>
                </div>
                <div className={s.add_button}>Add to cart</div>
            </div>

            <div className={s.description}>
              <span>Description</span>
              <p> {description} </p>
            </div>
            
        </section>

    </div>
  )
}

import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';
import s from './index.module.css';

export default function CartItemsContainer() {

  const cartState = useSelector(store => store.cart);

  return (
    <div className={s.cart_items_container} >
      {
        cartState.map(el => <CartItem key={el.id} {...el} />)
      }
    </div>
  )
}

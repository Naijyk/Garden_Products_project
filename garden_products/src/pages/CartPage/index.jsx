import React, { useEffect } from 'react';
import s from './index.module.css';
import { useSelector } from 'react-redux';
import CartItemsContainer from '../../components/CartItemsContainer';
import { Link } from 'react-router-dom';
import Order from '../../components/Order';

export default function CartPage() {

  const cartState = useSelector(store => store.cart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState))
  }, [cartState]);

  return (
    <div className={[s.cart, 'wrapper'].join(' ')}>
      <div className={s.title}>
        <h1>Shopping cart</h1>
        <div className={s.border}></div>
        <Link to='/products'
              className={s.back_to_the_store_btn}>Back to the store</Link>
      </div>
        {
          cartState.length === 0 ?
          <div className={s.empty_cart_content}>
            <p>Looks like you have no items in your basket currently.</p>
            <Link to='/products'>
              <div className={s.continue_shopping_btn}>Continue Shopping</div>
            </Link>
          </div>
          : <div className={s.cart_content}>
              <CartItemsContainer />
              <Order />
          </div>
        }
    </div>
  )
}

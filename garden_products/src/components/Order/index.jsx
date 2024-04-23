import React from 'react';
import s from './index.module.css';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { domen } from '../../requests/allProducts';

export default function Order({ openModal }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
     });

    const addOrder = order => {
        fetch(`${domen}/order/send`, {
          method: 'POST',
          body: JSON.stringify(order),
          headers: {'Content-Type': 'application/json;charset=utf-8'}
        })
          .then(res => res.json())
          .then(json => console.log(json))
    }

    const cartState = useSelector(store => store.cart);

    const onSubmit = ( data ) => {
        data = {...data, cart: cartState};
        addOrder(data);

        openModal();

        reset();
    }

    // const totalDiscont = cartState.reduce((acc, el) => acc + (el.discont_price && el.price), 0);

    const totalPrice = cartState.reduce((acc, el) => acc + (el.discont_price * el.count || el.price * el.count), 0);

  return (
    <div className={s.order}>
        <h1>Order details</h1>
        <div className={s.total}>
            <p>{ cartState.length } Items</p>
            <div className={s.total_price}>
                <p>Total</p>
                <p>${ totalPrice.toFixed(2) }</p>
            </div>
        </div>
        <form className={s.order_form}
              onSubmit={handleSubmit(onSubmit)}>
            <input type="text"
                   placeholder='Name'
                   {...register('username', {
                        required: 'Name is require field!'
                   })} />
                   {errors?.username && <span className={s.errors}>{errors.username?.message}</span>}
            <input type="number"
                   placeholder='Phone number'
                   {...register('tel', {
                        required: 'Phone number is require field!',
                   })} />
                   {errors?.tel && <span className={s.errors}>{errors.tel?.message}</span>}
            <input type="email"
                   placeholder='Email'
                   {...register('email', {
                       required: 'Email is require field!',
                       pattern: {
                           value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
                           message: 'Please enter valid email!'
                       }
                    })} />
                    {errors?.email && <span className={s.errors}>{errors.email?.message}</span>}

            <button className={s.order_btn}>Order</button>
        </form>
    </div>
  )
}

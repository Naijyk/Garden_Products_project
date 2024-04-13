import React from 'react';
import s from './index.module.css';
import { domen } from '../../requests/allProducts';
import ProductPrice from '../ProductPrice';
import { CgClose } from "react-icons/cg";
import { FiMinus, FiPlus } from "react-icons/fi";
import { decrItemAction, deleteItemAction, incrItemAction } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';

export default function CartItem({ id, image, title, price, discont_price, count }) {

  const dispatch = useDispatch();

  const img = domen + image;

  return (
    <div className={s.cart_item}>
      <img src={img} alt={title} />
      <div className={s.cart_item_content}>
        <div>
          <p>{ title }</p>
          <CgClose className={s.delete_item}
                   onClick={() => dispatch(deleteItemAction(id))} />
        </div>
        <div className={s.price}>
          <div className={s.quantity}>
            <div className={s.minus}
                 onClick={() => dispatch(decrItemAction(id))} >
              <FiMinus />
            </div>
            <p className={s.count}>{ count }</p>
            <div className={s.plus}
                 onClick={() => dispatch(incrItemAction(id))} >
              <FiPlus />
            </div>
          </div>
          <ProductPrice price={price * count}
                        discont_price={discont_price && (discont_price * count)} />
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import s from './index.module.css';
import { CgClose } from "react-icons/cg";
import { useDispatch } from 'react-redux';
import { clearCartAction } from '../../store/reducers/cartReducer';

export default function ModalWindow({ closeModal, modalActive }) {

  const dispatch = useDispatch();

  const closeModalWithClearCart = () => {
    dispatch(clearCartAction());
    closeModal();
  }

  return (
    <div className={[s.modal, modalActive ? s.active : ''].join(' ')}>
        <div className={s.modal_content} >
            <div>
              <h1>Congratulations!</h1>
              <CgClose className={s.close_modal}
                       onClick={closeModalWithClearCart} />
            </div>
            <p>Your order has been successfully placed on the website.</p>
            <p>A manager will contact you shortly to confirm your order.</p>
        </div>
    </div>
  )
}

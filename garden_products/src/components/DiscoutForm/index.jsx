import React, { useState } from 'react';
import discountImage from './media/discountForm.png';
import s from './index.module.css';

// проверка емайл
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const handleSubmit = (event, name, phone, email, setName, setPhone, setEmail, setErrorMessage) => {
  event.preventDefault();

  setErrorMessage(''); // Очистить любые предыдущие ошибки

  const isValid = validateEmail(email);

  if (!name) {
    setErrorMessage('Введите ваше имя.');
  } else if (!isValid) {
    setErrorMessage('Введите корректный адрес электронной почты.');
  } else {
    // Предполагая успешную отправку формы (заменить на реальный API-вызов)
    console.log('Форма успешно отправлена:', name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
  }
};

export default function DiscountForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className={s.discount_form}>
      <h1>5% off the first order</h1>
      <div>
        <img src={discountImage} alt="discount" />
        <div>
          <form onSubmit={(e) => handleSubmit(e, name, phone, email, setName, setPhone, setEmail, setErrorMessage)}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel" 
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errorMessage && <div className={s.error}>{errorMessage}</div>}
            <button type="submit" className={s.button}>
              Get a discount
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
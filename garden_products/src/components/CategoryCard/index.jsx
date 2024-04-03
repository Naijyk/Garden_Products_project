import React from 'react';
import s from './index.module.css';
import { domen } from '../../requests/categories';
import { Link } from 'react-router-dom';


export default function CategoryCard({ title, image, categoryId }) {

    const img = domen + image;

  return (
    <Link to={`/categories/${categoryId}`}>
        <div className={s.category_card}>
            <img src={img} alt={title} />
            <p>{ title }</p>
        </div>
    </Link>
  )
}
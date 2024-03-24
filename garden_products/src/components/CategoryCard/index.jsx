import React from 'react'
import s from './index.module.css'
import {domen} from '../../requests/categories'


export default function CategoryCard({title,image}) {

    const img = domen + image;

  return (
    <div className={s.category_card}> 
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  
  )
}

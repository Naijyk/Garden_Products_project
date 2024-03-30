import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories }  from '../../requests/categories';
import CategoryCard from '../CategoryCard';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function CategoriesContainer() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories)
    }, []);

    const categoriesData = useSelector(store => store.categories);

  return (
    <section className={[s.categories_container,'wrapper'].join(' ')}>
      <div className={s.title}>
          <h1>Categories</h1>
          <div className={s.border}></div>
          <Link to='/categories'
                className={s.all_categories_btn}>All categories</Link>
      </div>

      <div>
        {
            categoriesData.slice(1, 5).map(el => <CategoryCard key={el.id} {...el}/>)
        }
        </div>
    </section>
  )
}
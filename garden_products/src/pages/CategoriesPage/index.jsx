import React, { useEffect } from 'react'
import { getCategories } from '../../requests/categories';
import { useDispatch, useSelector } from 'react-redux';
import CategoryCard from '../../components/CategoryCard';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function CategoriesPage() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCategories)
  }, []);

  const categoriesData = useSelector(store => store.categories);

  return (
    <div className={[s.categories_page, 'wrapper'].join(' ')}>
      <section className={s.links_block}>
        <Link to='/'>
          <div className={[s.main_page_btn, s.links].join(' ')}> Main page </div>
        </Link>
        <div className={s.btns_line}></div>
        <Link to='/categories'>
          <div className={[s.categories_btn, s.links].join(' ')}> Categories </div>
        </Link>
      </section>
      <h1>Categories</h1>

      <div className={s.categories_container}>
        {
            categoriesData.map(el => <CategoryCard key={el.id} {...el}/>)
        }
      </div>
    </div>
  )
}

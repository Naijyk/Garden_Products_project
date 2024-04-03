import React, { useEffect } from 'react'
import { getCategories } from '../../requests/categories';
import { useDispatch, useSelector } from 'react-redux';
import CategoryCard from '../../components/CategoryCard';
import s from './index.module.css';

export default function CategoriesPage() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCategories)
  }, []);

  const categoriesData = useSelector(store => store.categories);

  return (
    <div className={[s.categories_page,'wrapper'].join(' ')}>
      <h1>Categories</h1>

      <div>
        {
            categoriesData.map(el => <CategoryCard key={el.id} {...el}/>)
        }
        </div>
    </div>
  )
}

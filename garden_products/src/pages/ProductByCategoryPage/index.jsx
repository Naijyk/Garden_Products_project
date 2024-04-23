import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../requests/products';
import ProductCard from '../../components/ProductCard';
import s from './index.module.css';
import { sortProductsAction } from '../../store/reducers/productsByCategoryReducer';

export default function ProductByCategoryPage() {

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductsByCategory(id))
  }, []);

  const productsByCategoryState = useSelector(store => store.productsByCategory);
  const { category, data } = productsByCategoryState;

  const order = event => {
    dispatch(sortProductsAction(event.target.value))
  }

  return (
    <div className={[s.products_by_category, 'wrapper'].join(' ')}>
      <section className={s.links_block}>
        <Link to='/'>
          <div className={[s.main_page_btn, s.links].join(' ')}> Main page </div>
        </Link>
        <div className={s.btns_line}></div>
        <Link to='/categories'>
          <div className={[s.categories_btn, s.links].join(' ')}> Categories </div>
        </Link>
        <div className={s.btns_line_two}></div>
        <Link to={`/categories/${id}`}>
          <div className={[s.category_title_btn, s.links].join(' ')}>{category && category.title}</div>
        </Link>
      </section>

      <h1>{ category && category.title }</h1>
      <div className={s.sort_block}>
        <div>
          <p>Price</p>
          <input type="text" placeholder='from' />
          <input type="text" placeholder='to' />
        </div>
        <div>
          <label>
            <span>Discounted items</span>
            <input type="checkbox" />
          </label>
        </div>
        <div>
          <span>Sorted</span>
          <select onInput={order}>
            <option value="">by default</option>
            <option value="name">by name</option>
            <option value="price_asc">price: low-high</option>
            <option value="price_desc">price: high-low</option>
          </select>
        </div>
      </div>
      <div className={s.products_container}>
        {
          data && data.map(el => <ProductCard key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}
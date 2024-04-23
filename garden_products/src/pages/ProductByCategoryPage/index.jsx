import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../requests/products';
import ProductCard from '../../components/ProductCard';
import s from './index.module.css';
import { sortProductsAction } from '../../store/reducers/productsByCategoryReducer';
import { checkPriceAction, getDiscountProductsAction } from '../../store/reducers/allProductsReducer';

export default function ProductByCategoryPage() {

  const [checked, setChecked] = useState(false);
  const handleCheck = () =>setChecked(!checked);
  const handleClick = e => dispatch(getDiscountProductsAction(e.target.checked));


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

  const addPriceRange = event => {
    event.preventDefault();
    const {min_value, max_value} = event.target;

    const check_values = {
      min_value: min_value.value || 0,
      max_value: max_value.value || Infinity
    }

    dispatch(checkPriceAction(check_values))
    event.target.reset()
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

      <div className={s.products_filter}>

        <form className={s.price_range} onSubmit={addPriceRange}>
          <label>
            <span>Price</span>
            <input type="number" placeholder='from' name='min_value' />
            <input type="number" placeholder='to' name='max_value' />
            <input type='submit' style={{visibility: 'hidden'}} />
          </label>
        </form>

        <label>
        <span> Discounted items </span>
        <input type="checkbox" checked={checked} onChange={handleCheck} onClick={handleClick}/>
        </label>

        <label>
        <span>Sorted</span>
        <select onInput={order}>
          <option disabled>by default</option>
          <option value='price_desc'>by descending price</option>
          <option value='price_asc'>by ascending price</option>
          <option value='alphabetically'>alphabetically</option>
        </select>
        </label>

      </div>
      <div className={s.products_container}>
        {
          data && data.map(el => <ProductCard key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}
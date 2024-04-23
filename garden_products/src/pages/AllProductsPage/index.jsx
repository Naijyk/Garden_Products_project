import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../requests/allProducts'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard';
import s from './index.module.css'
import { checkPriceAction, getDiscountProductsAction, sortProductsAction } from '../../store/reducers/allProductsReducer';

export default function AllProductsPage() {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const handleCheck = () =>setChecked(!checked);
  const handleClick = e => dispatch(getDiscountProductsAction(e.target.checked));


  useEffect(() => {
    dispatch(getAllProducts)
  }, [])

  const allProductsData = useSelector(store => store.allProducts);
  
  const order = event => {
    dispatch(sortProductsAction(event.target.value))
  }

  const add_price_range = event => {
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
        
        <div className={['wrapper', s.products_page].join(' ')}>
          <p>All products</p>
          <div className={s.products_filter}>

            <form className={s.price_range} onSubmit={add_price_range}>
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
          <div className={s.products_card}>
            {
            allProductsData
            .filter(el => el.visible)
            .map(el => <ProductCard key={el.id} {...el} />)
            } 
          </div>
         
        </div>
  )
}

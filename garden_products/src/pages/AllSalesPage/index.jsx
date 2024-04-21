import React, { useEffect } from 'react'
import DiscontProductCard from '../../components/DiscontProductCard'
import { getDiscontProducts } from '../../requests/sales'
import { useDispatch, useSelector } from 'react-redux';
import s from './index.module.css'
import { checkDiscontPriceAction, sortDiscountProductsAction } from '../../store/reducers/salesReducer';

export default function AllSalesPage({}) {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getDiscontProducts)
  }, []);

  const discontProductsData = useSelector(store => store.discontProducts);
  const productsWithSale = discontProductsData.filter(el => el?.discont_price);

  const order = event => {
    dispatch(sortDiscountProductsAction(event.target.value))
  }

  const add_sale_price_range = event => {
    event.preventDefault();
    const {min_value, max_value} = event.target;

    const check_values = {
      min_value: min_value.value || 0,
      max_value: max_value.value || Infinity
    }

    dispatch(checkDiscontPriceAction(check_values))
    event.target.reset()
    console.log(add_sale_price_range);
  }
 
  return (
    <div className={['wrapper', s.all_sales].join(' ')}>
      <p>Discounted items</p>
      <div className={s.sale_products_filter}>

            <form className={s.price_range} onSubmit={add_sale_price_range}>
              <label>
                <span>Price</span>
                <input type="number" placeholder='from' name='min_value' />
                <input type="number" placeholder='to' name='max_value' />
                <input type='submit' style={{visibility: 'hidden'}} />
              </label>
            </form>

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
      <div className={s.discount_card}>
      {
        productsWithSale.map(el => <DiscontProductCard key={el.id} {...el} />)
      }

      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import DiscontProductCard from '../../components/DiscontProductCard'
import { getDiscontProducts } from '../../requests/sales'
import { useDispatch, useSelector } from 'react-redux';
import s from './index.module.css'
import { sortDiscountProductsAction } from '../../store/reducers/salesReducer';

export default function AllSalesPage() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getDiscontProducts)
  }, []);

  const discontProductsData = useSelector(store => store.discontProducts);
  const productsWithSale = discontProductsData.filter(el => el?.discont_price);

  const order = event => {
    dispatch(sortDiscountProductsAction(event.target.value))
  }


  return (
    <div className={['wrapper', s.all_sales].join(' ')}>
      <p>Discounted items</p>
      <div className={s.sort_all_sales}>
          <span>Sorted:</span>
          <select onInput={order}>
            <option>by default</option>
            <option value='price_desc'>by descending price</option>
            <option value='price_asc'>by ascending price</option>
            <option value='alphabetically'>alphabetically</option>
          </select>
          </div>
      <div className={s.discount_card}>
      {
        productsWithSale.map(el => <DiscontProductCard key={el.id} {...el} />)
      }

      </div>
    </div>
  )
}

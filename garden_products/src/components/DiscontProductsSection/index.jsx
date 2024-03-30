import React, { useEffect } from 'react';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscontProducts } from '../../requests/sales';
import DiscontProductCard from '../DiscontProductCard';
import { Link } from 'react-router-dom';

export default function DiscontProductsSection() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDiscontProducts)
    }, []);

    const discontProductsData = useSelector(store => store.discontProducts);

    const productsWithSale = discontProductsData.filter(el => el?.discont_price)
                                                .slice(0, 4);

  return (
    <section className={['wrapper', s.sales_section].join(' ')}>
        <div className={s.title}>
          <h1>Sale</h1>
          <div className={s.border}></div>
          <Link to='/sales'
                className={s.all_sales_btn}>All sales</Link>
        </div>

        <div className={s.discont_products_container}>
            {
               productsWithSale.map(el => <DiscontProductCard key={el.id} {...el} />)
            }
        </div>
    </section>
  )
}

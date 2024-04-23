import React from 'react';
import NavMenu from '../NavMenu';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import CategoriesPage from '../../pages/CategoriesPage';
import AllProductsPage from '../../pages/AllProductsPage';
import AllSalesPage from '../../pages/AllSalesPage';
import s from './index.module.css';
import logo from './media/logo.png';
import basket from './media/basket=empty.png';
import { FiMenu } from "react-icons/fi";
import ProductByCategoryPage from '../../pages/ProductByCategoryPage';
import CartPage from '../../pages/CartPage';
import { useSelector } from 'react-redux';
import NotFoundPage from '../../pages/NotFoundPage';
import SingleProductPage from '../../pages/SingleProductPage';


export default function Header() {

  const cartState = useSelector(store => store.cart);

  const totalItems = {
    display: cartState.length === 0 ? 'none' : 'flex'
  }

  return (
    <header>
        <div className={[s.header, "wrapper"].join(' ')}>
            <img src={ logo }
                 alt="logo" />
            <NavMenu />
            <Link to='/cart' >
              <div className={s.cart}>
                <img src={ basket }
                     alt="basket"/>
                <p className={s.total_items}
                   style={totalItems}>{ cartState.length }</p>
              </div>
            </Link>
            <FiMenu className={s.menu_icon} />
        </div>


        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/categories' element={<CategoriesPage />} />
            <Route path='/products' element={<AllProductsPage />} />
            <Route path='/sales' element={<AllSalesPage />} />
            <Route path='/categories/:id' element={<ProductByCategoryPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/product/:id' element={<SingleProductPage />} />
          </Routes>
    </header>
  )
}

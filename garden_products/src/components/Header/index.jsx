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


export default function Header() {



  return (
    <header>
        <div className={[s.header, "wrapper"].join(' ')}>
            <img src={ logo }
                 alt="logo" />
            <NavMenu />
            <Link to='/cart' >
              <img src={ basket }
                   alt="basket"
                   className={s.cart}/>
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
          </Routes>
    </header>
  )
}

import React from 'react';
import NavMenu from '../NavMenu';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import CategoriesPage from '../../pages/CategoriesPage';
import AllProductsPage from '../../pages/AllProductsPage';
import AllSalesPage from '../../pages/AllSalesPage';
import s from './index.module.css';


export default function Header() {
  return (
    <div className={s.header}>
        <div className="wrapper">
            <NavMenu />
            <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/categories' element={<CategoriesPage />} />
            <Route path='/products' element={<AllProductsPage />} />
            <Route path='/sales' element={<AllSalesPage />} />
            </Routes>
        </div>
    </div>
  )
}

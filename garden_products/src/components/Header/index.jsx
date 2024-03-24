import React from 'react';
import NavMenu from '../NavMenu';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import CategoriesPage from '../../pages/CategoriesPage';
import AllProductsPage from '../../pages/AllProductsPage';
import AllSalesPage from '../../pages/AllSalesPage';
import s from './index.module.css';
import logo from './logo.png'
import basket from './basket=empty.png'


export default function Header() {

 

  return (    
    <section>
        <div className={[s.header, "wrapper"].join(' ')}>
            <img src={ logo } alt="logo" />
            <NavMenu />
            <img src={ basket } alt="basket" />  
        </div>
      
        <Routes>  
            <Route path='/' element={<MainPage />} />
            <Route path='/categories' element={<CategoriesPage />} />
            <Route path='/products' element={<AllProductsPage />} />
            <Route path='/sales' element={<AllSalesPage />} />
          </Routes>
    </section>
  )
}

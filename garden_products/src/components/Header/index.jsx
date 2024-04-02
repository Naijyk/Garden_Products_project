import React from 'react';
import NavMenu from '../NavMenu';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import CategoriesPage from '../../pages/CategoriesPage';
import AllProductsPage from '../../pages/AllProductsPage';
import AllSalesPage from '../../pages/AllSalesPage';
import s from './index.module.css';
<<<<<<< HEAD
import logo from './media/logo.png';
import basket from './media/basket=empty.png';
=======
import logo from './logo.png'
import basket from './basket=empty.png'
import { FiMenu } from "react-icons/fi";
>>>>>>> zarina


export default function Header() {

<<<<<<< HEAD
  return (
    <section>
        <div className={[s.header, "wrapper"].join(' ')}>
            <img src={ logo } alt="logo" />
            <NavMenu />
            <img src={ basket } alt="basket" />
        </div>

        <Routes>
=======


  return (    
    <header>
        <div className={[s.header, "wrapper"].join(' ')}>
            <img src={ logo } alt="logo" />
            <NavMenu />
            <img src={ basket } alt="basket" />  
            <FiMenu className={s.menu_icon} />
        </div>
                

        <Routes>  
>>>>>>> zarina
            <Route path='/' element={<MainPage />} />
            <Route path='/categories' element={<CategoriesPage />} />
            <Route path='/products' element={<AllProductsPage />} />
            <Route path='/sales' element={<AllSalesPage />} />
          </Routes>
    </header>
  )
}

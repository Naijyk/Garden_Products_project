import './App.css';
import NavMenu from './components/NavMenu';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import AllSalesPage from './pages/AllSalesPage';

function App() {
  return (
    <div>
      <p>
        <NavMenu />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/products' element={<AllProductsPage />} />
          <Route path='/sales' element={<AllSalesPage />} />
        </Routes>
      </p>
    </div>
  );
}

export default App;

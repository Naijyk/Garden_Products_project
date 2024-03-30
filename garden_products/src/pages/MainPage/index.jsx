import React from 'react';
import Banner from '../../components/Banner';
import SaleForm from '../../components/SaleForm';
import CategoriesContainer from '../../components/CategoriesContainerSection';
import DiscontProductsSection from '../../components/DiscontProductsSection';

export default function MainPage() {
  return (
    <div>
      <Banner/>
      <CategoriesContainer />
      <SaleForm />
      <DiscontProductsSection />
    </div>
  )
}

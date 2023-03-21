import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ProductDetailComponent from './productDetailComponent';
import ProductListComponent from './productListComponent';

class Main extends React.Component {
  render = () => (
    <Routes>
      <Route exact path="/" element={<ProductListComponent/>}/>
      <Route exact path="/detail" element={<ProductDetailComponent/>}/>
    </Routes>
  );
}

export default Main;
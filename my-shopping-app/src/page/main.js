import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ProductListComponent from '../components/productListComponent';

class Main extends React.Component {
  render = () => (
    <Routes>
      <Route exact path="/" element={<ProductListComponent/>}/>
    </Routes>
  );
}

export default Main;
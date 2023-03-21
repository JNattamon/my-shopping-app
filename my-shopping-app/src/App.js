import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Main from './components/main';
import NavbarComponent from './components/shared/navbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render = () => (
    <BrowserRouter>
      {/* <NavbarComponent/> */}
      <Main />
    </BrowserRouter>
  );
}

export default App;

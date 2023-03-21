import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render = () => (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;

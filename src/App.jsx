import * as React from 'react';
import './App.css';
import {Navbar, Footer} from './components';
import cardsData from './utils/getCards/index.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main-container page-padding'>
        {cardsData}
      </div>
      <Footer />
    </div>
  );
}

export default App;

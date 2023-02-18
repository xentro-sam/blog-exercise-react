import * as React from 'react';
import './App.css';
import {Navbar, Footer, Card} from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main-container page-padding'>
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;

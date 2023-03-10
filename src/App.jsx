import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ERROR_ROUTE, HOME_ROUTE} from './constants/routes';
import './App.css';
import {Error, Home, PageNotFound} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

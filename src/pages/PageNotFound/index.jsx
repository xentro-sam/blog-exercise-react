import React from 'react';
import {Footer, Navbar} from '../../components';
import './pageNotFound.css';

export default function PageNotFound() {
  return (
    <div>
      <Navbar />
      <div className="pageNotFoundContainer">
        <p>404 Error. Page not found</p>
      </div>
      <Footer />
    </div>
  );
};

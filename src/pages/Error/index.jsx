import React from 'react';
import {useParams} from 'react-router-dom';
import {Navbar, Footer} from '../../components';
import './error.css';

export default function Error() {
  const {errorCode} = useParams();
  return (
    <div>
      <Navbar />
      <div className="errorContainer">
        <p>Something went wrong!</p>
        {errorCode && <p>{`Error code: ${errorCode}`}</p>}
      </div>
      <Footer />
    </div>
  );
};

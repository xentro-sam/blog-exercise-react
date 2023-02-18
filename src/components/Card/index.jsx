import * as React from 'react';
import './Card.css';
import cardImage from '../../assets/Images/abstract.png';
import clappingIcon from '../../assets/Icons/clapping.svg';
import blackHeart from '../../assets/Icons/heart-black.svg';

export default function Card(cardInfo) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={cardImage} alt="" />
      </div>
      <div className="card-data">
        <div>2nd January 2018</div>
        <div>2 mins</div>
      </div>
      <div className="card-title">
                The future of abstract art and the culture
      </div>
      <div className="card-subtitle">
                Create a blog post subtitle that summarizes your
                post in a few short, punchy sentences and entices your...
      </div>
      <div>
        <hr />
      </div>
      <div className="card-footer">
        <div className="card-claps">
          <div className="card-footer-icons">
            <img src={clappingIcon} alt="" />
          </div>
          <div className="claps">
            10
          </div>
        </div>
        <div className="card-footer-icons">
          <img src={blackHeart} alt="" />
        </div>
      </div>
    </div>
  );
}

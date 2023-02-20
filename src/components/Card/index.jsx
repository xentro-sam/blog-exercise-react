import * as React from 'react';
import './Card.css';

import clappingIcon from '../../assets/Icons/clapping.svg';
import likeIcon from '../../assets/Icons/heart-red.svg';
import unlikeIcon from '../../assets/Icons/heart-black.svg';

export default function Card(cardInfo) {
  const [like, setLike] = React.useState(false);
  const [claps, setClaps] = React.useState(cardInfo.claps);
  const imageSrc = require(`../../assets/Images/${cardInfo.image}`);
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageSrc} alt="" />
      </div>
      <div className="card-data">
        <div>{cardInfo.date}</div>
        <div>{cardInfo.readingTime}</div>
      </div>
      <div className="card-title">
        {cardInfo.title}
      </div>
      <div className="card-subtitle">
        {cardInfo.description}
      </div>
      <div>
        <hr />
      </div>
      <div className="card-footer">
        <div className="card-claps">
          <div className="card-footer-icons">
            <img src={clappingIcon} alt="" onClick={() => setClaps(claps + 1)} />
          </div>
          <div className="claps">
            {claps}
          </div>
        </div>
        <div className="card-footer-icons">
          <img
            src={like ? likeIcon : unlikeIcon}
            alt=""
            onClick={() => setLike(!like)}
          />
        </div>
      </div>
    </div>
  );
}

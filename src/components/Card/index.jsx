import * as React from 'react';
import './Card.css';
import {useNavigate} from 'react-router-dom';

import clappingIcon from '../../assets/Icons/clapping.svg';
import likeIcon from '../../assets/Icons/heart-red.svg';
import unlikeIcon from '../../assets/Icons/heart-black.svg';

import {UPDATE_BLOG_DATA as updateBlogData} from '../../constants/apiEndPoints';
import {getFormattedDateFromUtcDate} from '../../utils/common';
import makeRequest from '../../utils/makeRequest';

export default function Card(cardInfo) {
  const [isLiked, setLike] = React.useState(cardInfo.liked);
  const [clapCount, setClaps] = React.useState(cardInfo.claps);
  const navigate = useNavigate();

  const handleClaps = () => {
    makeRequest(updateBlogData(cardInfo.id), {
      data: {claps: clapCount + 1},
    }, navigate)
        .then((data) => {
          setClaps(clapCount + 1);
        });
  };

  const handleLike = async () => {
    makeRequest(updateBlogData(cardInfo.id), {
      data: {liked: !isLiked},
    }, navigate)
        .then((data) => {
          setLike(!isLiked);
        });
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={cardInfo.image} alt="" />
      </div>
      <div className="card-data">
        <div>{getFormattedDateFromUtcDate(cardInfo.date)}</div>
        <div>{cardInfo.reading_time}</div>
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
            <img src={clappingIcon} alt="" onClick={handleClaps} />
          </div>
          <div className="claps">
            {clapCount}
          </div>
        </div>
        <div className="card-footer-icons">
          <img
            src={isLiked ? likeIcon : unlikeIcon}
            alt=""
            onClick={handleLike}
          />
        </div>
      </div>
    </div>
  );
}

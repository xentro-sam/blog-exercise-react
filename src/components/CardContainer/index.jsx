import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Card from '../Card';
import {GET_BLOG_DATA} from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './CardContainer.css';

export default function CardContainer() {
  const [cards, setCards] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    makeRequest(GET_BLOG_DATA, {}, navigate)
        .then((data) => {
          setCards(data);
        });
  }, []);

  return cards ? (
    <div className='main-container page-padding'>
      {cards.map((card) => {
        return <Card key={card.id} {...card} />;
      })}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

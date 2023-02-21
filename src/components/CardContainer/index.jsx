import * as React from 'react';
import Card from '../Card';
import {GET_BLOG_DATA} from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './CardContainer.css';

export default function CardContainer() {
  const [error, setError] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    makeRequest(GET_BLOG_DATA)
        .then((data) => {
          setCards(data);
        })
        .catch((error) => {
          setError(error);
        });
  }, []);

  if (error) {
    return <div>There was an error loading the cards</div>;
  }

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

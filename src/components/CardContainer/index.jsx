import * as React from 'react';
import Card from '../Card';
import {v4 as uuid} from 'uuid';
import './CardContainer.css';

export default function CardContainer() {
  const [error, setError] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    try {
      const cardsData = require('../../mockData/index.json');
      setCards(cardsData);
    } catch (error) {
      setError(error);
    }
  }, []);

  if (error) {
    return <div>There was an error loading the cards</div>;
  }

  return cards ? (
    <div className='main-container page-padding'>
      {cards.map((card) => {
        return <Card key={uuid()} {...card} />;
      })}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

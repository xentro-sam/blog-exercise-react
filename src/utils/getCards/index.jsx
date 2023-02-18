import * as React from 'react';
let cards = undefined;
import {Card} from '../../components';
import {v4 as uuid} from 'uuid';

try {
  const cardsData = require('../../mockData/index.json');
  cards = cardsData.map((card) => {
    return <Card
      key={uuid()}
      {...card}
      cardImage={require('../../assets/Images/'+card.image)}
    />;
  });
} catch (error) {
  cards = <div>There was an error loading the cards</div>;
}

export default cards;

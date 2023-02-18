let cardsData = undefined;

try {
  cardsData = require('../../mockData/index.json');
} catch (error) {
  throw new Error('Could not load JSON data');
}

export default cardsData;

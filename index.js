// arrayUtils.js
const _ = require('lodash');
const shuffle = require('shuffle-array');

const sortArray = (array, comparator) => {
  return _.sortBy(array, comparator);
};

const reverseArray = (array) => {
  return _.reverse(array);
};

const shuffleArray = (array) => {
  return shuffle(array);
};

module.exports = {
  sortArray,
  reverseArray,
  shuffleArray,
};
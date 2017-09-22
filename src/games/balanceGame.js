import { cons } from 'hexlet-pairs';
import newGame from '..';
import randomInt from '../utils';

const description = 'Balance the given number.';
const getSumOfChar = string => string.split('').reduce(((acc, x) => acc + Number(x)), 0);

const makeBalance = (numberStr) => {
  const sumOfChar = getSumOfChar(numberStr);
  const iterBalance = (sum, charsCount, resultString) => {
    if (charsCount === 0) {
      return resultString;
    }
    const newElement = Math.floor(sum / charsCount);
    const newResultString = resultString + String(newElement);
    return iterBalance(sum - newElement, charsCount - 1, newResultString);
  };
  return iterBalance(sumOfChar, numberStr.length, '');
};

const getQueAndAnsw = () => {
  const question = String(randomInt(99));
  const answer = makeBalance(question);
  return cons(question, answer);
};

export default () => newGame(description, getQueAndAnsw);

import { cons } from 'hexlet-pairs';
import newGame from '..';
import randomInt from '../utils';

const description = 'Balance the given number.';

const getSumOfDigits = (number) => {
  const numberStr = String(number);
  return numberStr.split('').reduce(((acc, x) => acc + Number(x)), 0);
};

const makeBalance = (number) => {
  const sumOfDigits = getSumOfDigits(number);
  const digitsCount = String(number).length;
  const iterBalance = (sum, count, resultStr) => {
    if (count === 0) {
      return Number(resultStr);
    }
    const newDigit = Math.floor(sum / count);
    const newResultStr = resultStr + String(newDigit);
    return iterBalance(sum - newDigit, count - 1, newResultStr);
  };
  return iterBalance(sumOfDigits, digitsCount, '');
};

const getQueAndAnsw = () => {
  const question = randomInt(99);
  const answer = makeBalance(question);
  return cons(String(question), String(answer));
};

export default () => newGame(description, getQueAndAnsw);

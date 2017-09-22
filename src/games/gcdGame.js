import { cons } from 'hexlet-pairs';
import newGame from '..';
import randomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const findGcd = (a, b) => {
  const iterGcd = (curNum) => {
    if (curNum === 1) {
      return curNum;
    } else if ((a % curNum === 0) && (b % curNum === 0)) {
      return curNum;
    }
    return iterGcd(curNum - 1);
  };
  const biggestNum = (a < b) ? a : b;
  return iterGcd(biggestNum);
};

const getQueAndAnsw = () => {
  const firstNumber = randomInt(20);
  const secondNumber = randomInt(20);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = findGcd(firstNumber, secondNumber);
  return cons(question, String(answer));
};

export default () => newGame(description, getQueAndAnsw);

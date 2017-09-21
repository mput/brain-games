import { cons } from 'hexlet-pairs';
import newGame from '..';
import { randomInt, findGcd } from '../utils';

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const queAndAnsw = () => {
    const firstNumber = randomInt(20);
    const secondNumber = randomInt(20);
    const question = `${firstNumber} ${secondNumber}`;
    const answer = findGcd(firstNumber, secondNumber);
    return cons(question, String(answer));
  };
  return newGame(description, queAndAnsw);
};

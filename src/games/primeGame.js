import { cons } from 'hexlet-pairs';
import newGame from '..';
import randomInt from '../utils';

const description = 'Answer "yes" if number prime otherwise answer "no"';

const isPrime = (number) => {
  const iterIsPrime = (divider) => {
    if (divider === 1) {
      return true;
    }
    if (number % divider === 0) {
      return false;
    }
    return iterIsPrime(divider - 1);
  };
  const startDivider = Math.floor(number / 2);
  return iterIsPrime(startDivider);
};

const getQueAndAnsw = () => {
  const question = randomInt(50);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(String(question), answer);
};

export default () => newGame(description, getQueAndAnsw);

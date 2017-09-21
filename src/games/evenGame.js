import { cons } from 'hexlet-pairs';
import newGame from '..';
import { randomInt } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';
const getQueAndAnsw = () => {
  const question = randomInt(50);
  const answer = ((question % 2 === 0) ? 'yes' : 'no');
  return cons(String(question), answer);
};

export default () => newGame(description, getQueAndAnsw);

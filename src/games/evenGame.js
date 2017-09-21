import { cons } from 'hexlet-pairs';
import newGame from '..';
import { randomInt } from '../utils';

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no"';
  const queAndAnsw = () => {
    const question = randomInt(50);
    const answer = ((question % 2 === 0) ? 'yes' : 'no');
    return cons(String(question), answer);
  };
  return newGame(description, queAndAnsw);
};

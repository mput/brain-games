import newGame from '..';
import random from '../utils';

export default () => {
  const rules = 'Answer "yes" if number even otherwise answer "no"';
  const newQuestion = () => random(50);
  const answer = question => ((question % 2 === 0) ? 'yes' : 'no');
  const questionToString = question => String(question);
  return newGame(rules, newQuestion, questionToString, answer);
};

import newGame from '..';
import { randomInt, findGcd } from '../utils';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const newQuestion = () => {
    const firstNumber = randomInt(20);
    const secondNumber = randomInt(20);
    return [firstNumber, secondNumber];
  };

  const answer = (question) => {
    const firstNumber = question[0];
    const secondNumber = question[1];
    return String(findGcd(firstNumber, secondNumber));
  };

  const questionToString = question => `${question[0]} ${question[1]}`;
  return newGame(rules, newQuestion, questionToString, answer);
};

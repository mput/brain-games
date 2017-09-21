import { cons } from 'hexlet-pairs';
import newGame from '..';
import { randomInt } from '../utils';

export default () => {
  const description = 'What is the result of the expression?';
  const queAndAnsw = () => {
    const firstNumber = randomInt(9);
    const secondNumber = randomInt(9);
    const operator = ['+', '-', '*'][randomInt(3) - 1];
    const question = `${firstNumber} ${operator} ${secondNumber}`;

    const findAnswer = (sign) => {
      switch (sign) {
        case '+':
          return firstNumber + secondNumber;
        case '-':
          return firstNumber - secondNumber;
        default:
          return firstNumber * secondNumber;
      }
    };
    const answer = String(findAnswer(operator));
    return cons(question, answer);
  };
  return newGame(description, queAndAnsw);
};

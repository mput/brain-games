import { cons } from 'hexlet-pairs';
import newGame from '..';
import randomInt from '../utils';

const description = 'What is the result of the expression?';

const getQueAndAnsw = () => {
  const firstNumber = randomInt(9);
  const secondNumber = randomInt(9);
  const operator = ['+', '-', '*'][randomInt(3) - 1];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  let answer;
  switch (operator) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    default:
      answer = firstNumber * secondNumber;
  }
  return cons(question, String(answer));
};

export default () => newGame(description, getQueAndAnsw);

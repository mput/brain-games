import { cons } from 'hexlet-pairs';
import newGame from '..';
import randomInt from '../utils';

const description = 'What is the result of the expression?';
const findAnswer = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};
const getQueAndAnsw = () => {
  const firstNumber = randomInt(9);
  const secondNumber = randomInt(9);
  const operator = ['+', '-', '*'][randomInt(3) - 1];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = findAnswer(operator, firstNumber, secondNumber);
  return cons(question, String(answer));
};

export default () => newGame(description, getQueAndAnsw);

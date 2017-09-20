import newGame from '..';
import { randomInt } from '../utils';

export default () => {
  const rules = 'What is the result of the expression?';
  const newQuestion = () => {
    const firstNumber = randomInt(9);
    const secondNumber = randomInt(9);
    const operator = ['+', '-', '*'][randomInt(3) - 1];
    return [firstNumber, secondNumber, operator];
  };

  const answer = (question) => {
    switch (question[2]) {
      case '+':
        return String(question[0] + question[1]);
      case '-':
        return String(question[0] - question[1]);
      case '*':
        return String(question[0] * question[1]);
      default:
        return NaN;
    }
  };
  const questionToString = question => `${question[0]} ${question[2]} ${question[1]}`;
  return newGame(rules, newQuestion, questionToString, answer);
};

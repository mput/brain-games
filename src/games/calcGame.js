import random from '../random';
import newGame from '..';

class CalcQuestion {
  constructor() {
    this.firstNumber = random(9);
    this.secondNumber = random(9);
    this.operator = ['+', '-', '*'][random(3) - 1];
  }
  get question() {
    return `${this.firstNumber} ${this.operator} ${this.secondNumber}`;
  }
  get answer() {
    switch (this.operator) {
      case '+':
        return String(this.firstNumber + this.secondNumber);
      case '-':
        return String(this.firstNumber - this.secondNumber);
      case '*':
        return String(this.firstNumber * this.secondNumber);
      default:
        return NaN;
    }
  }
}

const rules = 'What is the result of the expression?';

export default () => {
  return newGame(rules, CalcQuestion);
};

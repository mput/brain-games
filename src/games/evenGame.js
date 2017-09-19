import random from '../random';
import newGame from '..';

class CalcQuestion {
  constructor() {
    this.Number = random(50);
  }
  get question() {
    return this.Number;
  }
  get answer() {
    return (this.Number % 2 === 0) ? 'yes' : 'no';
  }
}

const rules = 'Answer "yes" if number even otherwise answer "no"';

export default () => newGame(rules, CalcQuestion);

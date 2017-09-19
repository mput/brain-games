import { greeter, getName, gameEngine } from '.';
import random from './random';


export default () => {
  const gameRule = 'Answer "yes" if number even otherwise answer "no".';
  greeter(gameRule);
  const qstnGenFn = () => random(50);
  const rightAnswFn = question => (question % 2 === 0 ? 'yes' : 'no');
  const userName = getName();
  const game = gameEngine(qstnGenFn, rightAnswFn, userName);
  game();
};

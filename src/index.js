import { greeter, getName, gameEngine } from './gameEngine';

export default (rule, CalcQuestion) => {
  greeter(rule);
  const userName = getName();
  const game = gameEngine(CalcQuestion, userName);
  game();
};

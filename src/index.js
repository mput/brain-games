import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const stepsAmount = 3;

const runGame = (getQueAndAnsw, currentStep = 0) => {
  if (currentStep === stepsAmount) {
    return true;
  }
  const newQueAndAnsw = getQueAndAnsw();
  const question = car(newQueAndAnsw);
  const rightAnswer = cdr(newQueAndAnsw);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return runGame(getQueAndAnsw, currentStep + 1);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

export default (description, getQueAndAnsw) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const isGameWin = runGame(getQueAndAnsw);
  const byeMessage = isGameWin ?
    `Congratulations, ${userName}!` :
    `Let's try again, ${userName}!`;
  console.log(byeMessage);
};

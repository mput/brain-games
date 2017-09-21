import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';


const newGame = (rules, queAndAnsw) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const runGame = (currentStep) => {
    const gameStepsAmount = 3;
    if (currentStep === gameStepsAmount) {
      console.log(`Congratulations, ${userName}!`);
      return 0;
    }
    const newQueAndAnsw = queAndAnsw();
    const question = car(newQueAndAnsw);
    const rightAnswer = cdr(newQueAndAnsw);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      return runGame(currentStep + 1);
    }
    console.log(`'${userAnswer}' is is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return runGame(0);
  };
  const currentStep = 0;
  return runGame(currentStep);
};

export default newGame;

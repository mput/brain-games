import readlineSync from 'readline-sync';

const greeter = (rules) => {
  console.log('Welcome to the Brain Games!');
  if (rules) {
    console.log(rules);
  }
};

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const gameEngine = (qstnGenFn, rightAnswFn, name) => {
  const runGame = (rightAnswer = 0, shouldBeRight = 3) => {
    if (rightAnswer === shouldBeRight) {
      console.log(`Congratulations, ${name}!`);
      return 'Game over';
    }
    const question = qstnGenFn();
    const userAnswer = getAnswer(question);
    const rightAnsw = rightAnswFn(question) 
    if (userAnswer === rightAnsw) {
      console.log('Correct!');
      return runGame(rightAnswer + 1);
    }
    console.log(`'${userAnswer}' is is wrong answer ;(. Correct answer was '${rightAnsw}'.`);
    console.log(`Let's try again, ${name}!`);
    return runGame();
  };
  return runGame;
};


export { greeter, getName, gameEngine };

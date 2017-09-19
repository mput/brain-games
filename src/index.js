import readlineSync from 'readline-sync';

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const BLUE = '\x1b[34m';
const NC = '\x1b[0m';

const greeter = (rules) => {
  console.log(`${GREEN}Welcome to the Brain Games!${NC}`);
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
  console.log(`Question: ${BLUE}${question}${NC}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const gameEngine = (qstnGenFn, rightAnswFn, name) => {
  const runGame = (rightAnswer = 0, shouldBeRight = 3) => {
    if (rightAnswer === shouldBeRight) {
      console.log(`${GREEN}Congratulations, ${name}!${NC}`);
      return 'Game over';
    }
    const question = qstnGenFn();
    const userAnswer = getAnswer(question);
    const rightAnsw = rightAnswFn(question);
    if (userAnswer === rightAnsw) {
      console.log('Correct!');
      return runGame(rightAnswer + 1);
    }
    console.log(`${RED}'${userAnswer}' is is wrong answer ;(. Correct answer was '${rightAnsw}'.${NC}`);
    console.log(`Let's try again, ${name}!`);
    return runGame();
  };
  return runGame;
};

export { greeter, getName, gameEngine };

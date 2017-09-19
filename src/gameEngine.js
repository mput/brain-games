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

const gameEngine = (CalcQuestion, name) => {
  const runGame = (rightAnswerCount = 0, shouldBeRight = 3) => {
    console.log(rightAnswerCount);
    if (rightAnswerCount === shouldBeRight) {
      console.log(`${GREEN}Congratulations, ${name}!${NC}`);
      return 'Game over';
    }
    const questionInst = new CalcQuestion();
    const toUserQuestion = questionInst.question;
    const rightAnswer = questionInst.answer;
    const userAnswer = getAnswer(toUserQuestion);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      return runGame(rightAnswerCount + 1);
    }
    console.log(`${RED}'${userAnswer}' is is wrong answer ;(. Correct answer was '${rightAnswer}'.${NC}`);
    console.log(`Let's try again, ${name}!`);
    return runGame();
  };
  return runGame;
};

export { greeter, getName, gameEngine };

import readlineSync from 'readline-sync';

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

const newGame = (rules, newQuestion, questionToString, answer) => {
  console.log('Welcome to the Brain Games!');
  if (!rules) {
    return 0;
  }
  console.log(rules);
  const userName = getName();
  const runGame = (rightAnswerCount, shouldBeRight) => {
    if (rightAnswerCount >= shouldBeRight) {
      console.log(`Congratulations, ${userName}!`);
      return 0;
    }
    const question = newQuestion();
    const questionString = questionToString(question);
    const rightAnswer = answer(question);
    const userAnswer = getAnswer(questionString);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      return runGame(rightAnswerCount + 1, shouldBeRight);
    }
    console.log(`'${userAnswer}' is is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return runGame(0, shouldBeRight);
  };
  return runGame(0, 3);
};

export default newGame;

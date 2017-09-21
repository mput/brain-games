import { cons } from 'hexlet-pairs';
import newGame from '..';
import randomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';

const sortString = string => string.split('').sort().join('');

const makeBalance = (numberStr) => {
  const iterBalance = (firstNumber, tailStr, curCharIndex, wasMoved) => {
    if (curCharIndex === tailStr.length) {
      if (wasMoved) {
        return iterBalance(firstNumber, tailStr, 0, false);
      }
      return `${firstNumber}${tailStr}`;
    }

    const curChar = Number(tailStr.charAt(curCharIndex));
    const difference = curChar - firstNumber;
    if (Math.abs(difference) > 1) {
      const changer = difference > 0 ? 1 : -1;
      const newFirstChar = firstNumber + changer;
      const newTailString = tailStr.slice(0, curCharIndex) + String(curChar - changer) +
        tailStr.slice(curCharIndex + 1, tailStr.length);
      return iterBalance(newFirstChar, newTailString, 0, true);
    }
    return iterBalance(firstNumber, tailStr, curCharIndex + 1, false);
  };
  const firstNumber = Number(numberStr.charAt(0));
  const tailString = numberStr.slice(1);
  const balanced = iterBalance(firstNumber, tailString, 0, false);
  return sortString(balanced);
};

console.log(makeBalance('4181'));


const getQueAndAnsw = () => {
  const question = String(randomInt(9999));
  const answer = makeBalance(question);
  return cons(question, answer);
};

export default () => newGame(description, getQueAndAnsw);


// for (let i = 0 i<numberStr.length)
/*
{
  if (curCharIndex === string.length && wasMoved === false) {
    return string;
  } else if (curCharIndex === string.length) {
    return iterBalance(string, 1, false);
  }
  const curNumber = Number(string.charAt(curCharIndex));
  const prevNumber = Number(string.charAt(curCharIndex - 1));
  console.log('curNumber = ', curNumber, ' prevNumber = ', prevNumber, 'difff', curNumber - prevNumber);
  if (curNumber - prevNumber > 1) {
    const newString = string.slice(0, curCharIndex - 1) +
      String(prevNumber + 1) + String(curNumber - 1) +
      string.slice(curCharIndex + 1, string.length);
    console.log(newString)
    return iterBalance(newString, 1, true);
  }
  return iterBalance(string, curCharIndex + 1, false);
};

*/
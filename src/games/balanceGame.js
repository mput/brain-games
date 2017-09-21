import { cons } from 'hexlet-pairs';
import newGame from '..';
import randomInt from '../utils';

const description = 'Balance the given number.';

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

const getQueAndAnsw = () => {
  const question = String(randomInt(99));
  const answer = makeBalance(question);
  return cons(question, answer);
};

export default () => newGame(description, getQueAndAnsw);

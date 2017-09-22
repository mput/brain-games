import { cons } from 'hexlet-pairs';
import newGame from '..';
import randomInt from '../utils';

const description = 'What number is missing in this progression?';

const getQueAndAnsw = () => {
  const progElmsCount = 10;
  const skippedElmPos = randomInt(10) - 1;
  const firstElm = randomInt(10);
  const step = randomInt(5);

  const iterQnA = (currentElm, currentElmPos, progression, hiddenElm) => {
    if (currentElmPos === progElmsCount) {
      return cons(progression, hiddenElm);
    }
    const nextElm = currentElm + step;
    const nextElmPos = currentElmPos + 1;
    const separator = (currentElmPos === 0) ? '' : ' ';

    if (currentElmPos === skippedElmPos) {
      return iterQnA(nextElm, nextElmPos, `${progression}${separator}..`, String(currentElm));
    }
    return iterQnA(nextElm, nextElmPos, `${progression}${separator}${currentElm}`, hiddenElm);
  };

  return iterQnA(firstElm, 0, '', '');
};

export default () => newGame(description, getQueAndAnsw);

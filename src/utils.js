const randomInt = (max) => {
  // return random number from 1 to max included.
  const randomInteger = (Math.floor(Math.random() * max)) + 1;
  return randomInteger;
};

const findGcd = (a, b) => {
  const iterGcd = (curNum) => {
    if (curNum === 1) {
      return curNum;
    } else if ((a % curNum === 0) && (b % curNum === 0)) {
      return curNum;
    }
    return iterGcd(curNum - 1);
  };
  const biggestNum = (a > b) ? a : b;
  return iterGcd(biggestNum);
};

export { randomInt, findGcd };


const randomInt = (max) => {
  // return random number from 1 to max included.
  const randomInteger = (Math.floor(Math.random() * max)) + 1;
  return randomInteger;
};

export default randomInt;


const getRandomNumber = (min, max) => {
  const randNumber = min + Math.random() * (max - min);
  const roundNumber = Math.round(randNumber);
  return roundNumber;
};

export { getRandomNumber };

export function rollDice(diceSize) {
  // let diceResult = Math.ceil(Math.random() * diceSize);
  let diceResult = Math.floor(Math.random() * diceSize) + 1;
  return diceResult;
}

console.log(rollDice(6));

// export { rollDice };

// Code your solutions in this file



function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }
  return arr;
}

function tailsNeverFails() {
  function maybeTrue() {
      return Math.random() >= 0.5;
  }

  while (maybeTrue()) {
    console.log("You got ${} tails in a row!")
  }

}

const clickCounter = (function() {
  let count = 0;

  function increaseCounter() {
    count++;
    console.log(`Click count: ${count}`);
  }

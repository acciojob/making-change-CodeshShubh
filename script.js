const makeChange = (c) => {
  // your name here
	let coinCounts = {
  q: 0, // quarters
  d: 0, // dimes
  n: 0, // nickels
  p: 0  // pennies
};
 // Start with the largest coin (quarters)
  coinCounts.q = Math.floor(c / 25);
  c %= 25; 
  // Next, calculate the number of dimes
  coinCounts.d = Math.floor(c / 10); 
  c %= 10; 
  // Next, calculate the number of nickels
  coinCounts.n = Math.floor(c / 5); 
  c %= 5; 
  // Finally, calculate the number of pennies
  coinCounts.p = c; 

  return coinCounts; 

	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

const formula1Champions = [
  "Schumacher",
  "Schumacher",
  "Schumacher",
  "Schumacher",
  "Schumacher",
  "Alonso",
  "Alonso",
  "Räikkönen",
  "Hamilton",
  "Button",
  "Vettel",
  "Vettel",
  "Vettel",
  "Vettel",
  "Hamilton",
  "Hamilton",
  "Rosberg",
  "Hamilton",
  "Hamilton",
  "Hamilton",
  "Hamilton",
];

let orderedWinners = [];
formula1Champions.sort();
for (let n = 0; n < formula1Champions.length - 1; n++) {
  if (formula1Champions[n] !== formula1Champions[n - 1]) {
    orderedWinners.push(formula1Champions[n]);
  }
}

let winners = {};
function countWin(driver) {
  let timeswon = [];
  for (let c = 0; c < formula1Champions.sort().length; c++) {
    if (formula1Champions[c] === driver) {
      timeswon.push(formula1Champions[c]);
    }
  }

  return timeswon.length;
}

for (let i = 0; i < orderedWinners.length; i++) {
  winners[orderedWinners[i]] = countWin(orderedWinners[i]);
}
console.log(winners);

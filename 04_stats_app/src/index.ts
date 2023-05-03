import fs from 'fs';

// Read the file and convert it to a string
const data = fs.readFileSync('football.csv', 'utf8');

// Split the data into rows
const rows = data.split('\n');

// Split the row into an array of strings
const matches = rows.map((row: string): string[] => {
  return row.split(',');
});

// Define the enum for the match result
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

// Count the number of wins
let manUnitedWins = 0;
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

// Print the number of wins
console.log(`Man United won ${manUnitedWins} games`);

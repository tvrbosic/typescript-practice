"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// Read the file and convert it to a string
const data = fs_1.default.readFileSync('football.csv', 'utf8');
// Split the data into rows
const rows = data.split('\n');
// Split the row into an array of strings
const matches = rows.map((row) => {
    return row.split(',');
});
// Define the enum for the match result
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
// Count the number of wins
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// Print the number of wins
console.log(`Man United won ${manUnitedWins} games`);

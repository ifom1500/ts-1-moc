import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

let ManUniteWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    ManUniteWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    ManUniteWins++;
  }
}

console.log("=================================");
console.log(`Man United won ${ManUniteWins} times`);
// console.log(reader.data);

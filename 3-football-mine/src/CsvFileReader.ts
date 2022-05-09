import fs from 'fs';

export class CsvFileReader {
  data: MatchData[] = []; // массив из таплов

  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',');
    })
    .map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult, // 'H', 'A', 'D'
        row[6]
      ]
    })
  }
}

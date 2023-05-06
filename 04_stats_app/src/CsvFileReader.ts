import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  // Read the file and convert it to a string.
  // Split the data into rows.
  // Split the row into an array of strings.
  // Convert the strings into the appropriate type.
  read(): void {
    this.data = fs
      .readFileSync(this.filename, 'utf8')
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
          // Type assertion
          row[5] as MatchResult,
          row[6],
        ];
      });
  }
}

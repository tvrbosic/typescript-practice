// ############################## Composition approach ##############################
import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

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
      });
  }
}

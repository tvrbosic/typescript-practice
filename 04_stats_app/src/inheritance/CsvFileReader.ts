// ############################## Inheritance approach ##############################
import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  // Read the file and convert it to a string.
  // Split the data into rows.
  // Split the row into an array of strings.
  // Convert the strings into the appropriate type of data.
  read(): void {
    this.data = fs
      .readFileSync(this.filename, 'utf8')
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}

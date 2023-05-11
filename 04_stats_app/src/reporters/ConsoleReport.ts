import { OutputTarget } from '../DataProcessing';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}

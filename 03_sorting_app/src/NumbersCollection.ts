import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  // data: number[]; (covered by public keyword in constructor)

  constructor(public data: number[]) {
    super();
    // this.data = data; (covered by public keyword in constructor)
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const tmp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = tmp;
  }
}

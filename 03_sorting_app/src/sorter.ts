import { NumbersCollection } from './NumbersCollection';

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  // collection: number[]; (covered by public keyword in constructor)

  constructor(public collection: Sortable) {
    // this.collection = collection; (covered by public keyword in constructor)
  }

  sort(): void {
    const { length } = this.collection;

    // Bubble sort algorithm
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

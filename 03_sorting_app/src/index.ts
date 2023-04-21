class Sorter {
  // collection: number[]; (covered by public keyword in constructor)

  constructor(public collection: number[]) {
    // this.collection = collection; (covered by public keyword in constructor)
  }

  sort(): void {}
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);

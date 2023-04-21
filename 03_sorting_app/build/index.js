"use strict";
class Sorter {
    // collection: number[]; (covered by public keyword in constructor)
    constructor(collection) {
        this.collection = collection;
        // this.collection = collection; (covered by public keyword in constructor)
    }
    sort() { }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);

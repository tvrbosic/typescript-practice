"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numbersCollection = void 0;
class numbersCollection {
    // data: number[]; (covered by public keyword in constructor)
    constructor(data) {
        this.data = data;
        // this.data = data; (covered by public keyword in constructor)
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const tmp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = tmp;
    }
}
exports.numbersCollection = numbersCollection;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
        // Create a new node
        const node = new Node(data);
        // If there is no head, make this node the head
        if (!this.head) {
            this.head = node;
            return;
        }
        // If there is a head, find the last node and add the new node
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        // If there is no head, return 0
        if (!this.head) {
            return 0;
        }
        // If there is a head, count the number of nodes
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        // If there is no head, throw an error
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        // If there is a head, find the node at the index
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        // If the index is out of bounds, throw an error
        throw new Error('Index out of bounds');
    }
    compare(leftIndex, rightIndex) {
        // If there is no head, throw an error
        if (!this.head) {
            throw new Error('List is empty');
        }
        // If there is a head, find the nodes at the indices and compare their data
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        // If there is no head, throw an error
        if (!this.head) {
            throw new Error('List is empty');
        }
        // If there is a head, find the nodes at the indices and swap their data
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const tmp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = tmp;
    }
    print() {
        // If there is no head, throw an error
        if (!this.head) {
            throw new Error('List is empty');
        }
        // If there is a head, print the data of each node
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;

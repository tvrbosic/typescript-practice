import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
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

  get length(): number {
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

  at(index: number): Node {
    // If there is no head, throw an error
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    // If there is a head, find the node at the index
    let counter = 0;
    let node: Node | null = this.head;
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

  compare(leftIndex: number, rightIndex: number): boolean {
    // If there is no head, throw an error
    if (!this.head) {
      throw new Error('List is empty');
    }

    // If there is a head, find the nodes at the indices and compare their data
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
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

  print(): void {
    // If there is no head, throw an error
    if (!this.head) {
      throw new Error('List is empty');
    }

    // If there is a head, print the data of each node
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

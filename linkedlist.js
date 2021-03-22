// User defined class node
class Node {
  constructor(element) {
    this.data = element;
    this.next = null;
  }
}

// linkedlist class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //adds an element at the end of the Linked list
  push(element) {
    // creates a new node
    let newNode = new Node(element);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  //Print the entire linked list
  print() {
    let printLinkedList = [];
    let current = this.head;
    while (current) {
      printLinkedList.push(current.data);
      current = current.next;
    }

    return printLinkedList;
  }
  //Insert an element at given index
  insertAt(element, index) {
    if (index <= 0 && index > this.size + 1) {
      console.log("insertion cannot be done.....");
    } else {
      // creates a new node
      let newNode = new Node(element);
      let current = this.head;
      let previous = null;
      if (index === 1) {
        this.head = newNode;
        newNode.next = current;
      } else {
        let i = 1;
        // iterate over the list to find
        // the position to insert
        while (i < index) {
          previous = current;
          current = current.next;
          i++;
        }
        previous.next = newNode;
        newNode.next = current;
      }
    }
    this.size++;
  }
  //Delete an element with a specified index
  deleteAt(index = this.size) {
    if (index > this.size) {
      console.log("Invalid Index");
    } else {
      let current = this.head;
      let previous = null;
      if (index == 1) {
        this.head = current.next;
      } else {
        let i = 1;
        let deletedNode;
        // iterate over the list to find
        // the position to delete
        while (i < index) {
          previous = current;
          current = current.next;
          i++;
        }
        previous.next = current.next;
        //delete the removed Node
        deletedNode = current;
        console.log("deleted " + deletedNode);
        deletedNode = null;
      }
    }
  }
}

let l1 = new LinkedList();
// l1.push(10);
// l1.push(40);
// l1.push(50);
// l1.push(60);
// l1.push(30);
// l1.push(20);
// console.log(l1.print());
// l1.insertAt(0, 1);

// l1.insertAt(89, 8);
// console.log(l1.print());
// l1.deleteAt(7);

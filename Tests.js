const LinkedList = require("./LinkedList");

const list = new LinkedList();

//Test reversing an empty list
console.log("Reversing an empty list:");
list.reverse();
list.display();

//Test reversing a list with one node
console.log("Reversing a list with one node:");
list.insert(1);
list.display();
list.reverse();
list.display();

//Test reversing a list with multiple nodes
console.log("Reversing a list with multiple nodes:");
list.insert(2);
list.insert(3);
list.insert(4);
list.display();
list.reverse();
list.display();

Middle Node -1:11:19
Description

Given a non-empty, singly linked list with the head nodehead, return a middle node of the linked list.

If there are two middle nodes, return the second middle node.

Complete the functionbelow, no need to take any input.


Input
This is a function complete problem.

Refer to sample input for understanding

The first line contains the number of nodes (t)

Next t lines contains the node of the linked list

t <= 1000

list[i] <= 1000


Output
Complete the function


Sample Input 1 

3
1
2
3
Sample Output 1

2
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    var f = head;
    var s = head;
    
    while(f && f.next){
        s = s.next
        f = f.next.next;
    }
    return s.data;
};




//code

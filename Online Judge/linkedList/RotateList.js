Rotate Linked List Ended
Description

Given a linked list, rotate the list to the right by k places, where k isnon-negative.

Complete the function, and return the head of the updated list


Input
This is a function complete problem.

Refer to sample input for understanding

The first line contains the number of nodes (n)

Next n lines contains the nodes of the linked list

Next line contains k

n <= 1000

list[i] <= 1000


Output
Complete the function


Sample Input 1 

3
1
2
3
2
Sample Output 1

2 3 1



//code
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
    if(head == null || k == 0){
        return head
        
    }
    let i = 1
    let tail = head;
    while(tail.next != null){
        i++
        tail = tail.next
    }
    while(k>i){
        k = k - i;
    }
    let j = i-k;
    tail.next = head;
    let newTail = tail;
    
    while(j-- > 0){
    newTail = newTail.next
    }
    
    let newHead = newTail.next
    newTail.next = null;
    return newHead
};

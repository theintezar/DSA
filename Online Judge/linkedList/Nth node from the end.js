Nth node from the end -1:43:23
Description

Given a linked list consisting of nodesand given a number N. The task is to find the nth nodefrom the end of the linked list.

No need to take any input, just complete the function below and return the nth node.


Input
This is a function complete problem.

Refer to sample input for understanding

The first line contains the number nodes (t)

Next t lines contains the nodes of the linked list

Next line contains the number n

t <= 1000

list[i] <= 1000


Output
Complete the function


Sample Input 1 

3
1
2
3
1
Sample Output 1

3






//code

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
   var p1 = head;
   var p2 = head;
   for(var i = 0; i<n; i++){
       if(p2 == null){
           return null;
       }
       p2 = p2.next;
   }
   while(p2 != null){
       p1 = p1.next;
       p2 = p2.next;
   }
   return p1.data;
}

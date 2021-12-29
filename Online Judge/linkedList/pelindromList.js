Palindrome List -0:51:3
Description

Given a singly linked list, determine if it is a palindrome.
No need to take any input, You'll be given the pointer to the head of the linked list,Complete the function belowand return true if it's a palindrome and false if otherwise.


Input
This is a function complete problem.

Refer to sample input for understanding

The first line contains the number of nodes (n)

Next n lines contains the nodes of the linked list.

n <= 1000

list[i] <= 1000


Output
Complete the function


Sample Input 1 

3
1
2
1
Sample Output 1

true



//code
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    


    let node = head,
               previous,
               temp;
               
    while(node){
        temp = node.next;
        node.next = previous;
        previous = node;
        node = temp;
    }
   if(previous.data===head.data) return "true";
   else return "false"
    
}

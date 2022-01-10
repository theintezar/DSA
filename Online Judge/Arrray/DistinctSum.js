Distinct Again Ended
Description

You are given an array of N elements. Your task is to write a program that calculates the sum of all distinct elements present in the array.


Input
Input Format

First line of input contains N

Second line of input contains N space separated integers.

Constraints

N<10000




Output
Output Format

Output sum of only distinct elements


Sample Input 1 

5
2 2 2 1 1
Sample Output 1

3
Hint

Sample 1 Explanation

There are 5 elements present in the array but only 2 distinct elements (2 and 1)



//code

function DistinctAgain(n, arr){
       var mySet =[...new Set(arr)];
       //return mySet;
       var sum = 0;
       for(var i = 0; i<mySet.length; i++){
           sum+=mySet[i]
       }
       return sum;
   }
    function runProgram(input) {
        // Write code here
        input = input.split("\n");
        var n = +input[0];
        var arr = input[1].split(" ").map(Number);
        console.log(DistinctAgain(n, arr));
       
      }

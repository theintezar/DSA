//https://oj.masaischool.com/contest/1989/problem/02

/*
Description
Given an array of integers of length n, the task is to remove elements from the array to make array sorted. That is, remove the elements which do not follow an increasing order.

Input
Input Format

First line Consists of integer n.

Second line consists of n integers separated by spaces.

Constraints
1 <= n <= 10^6


Output
Print the sorted array.

Sample Input 1 

10
1 2 4 3 5 7 8 6 9 10

Sample Output 1

1 2 4 5 7 8 9 10

*/
function removeSort(N,arr){
    var ans = [];
    ans.push(arr[0]);
    var big = arr[0];
    for(var i=1; i<arr.length; i++) {
        if(arr[i]>=big) {
            big = arr[i];
            ans.push(arr[i]);
        }
    }
    console.log(ans.join(" "));
}
function runProgram(input) {
    input = input.split("\n");
var N = +input[0];
var arr = input[1].split(" ").map(Number);
removeSort(N,arr);
   
  }
  if (process.env.USERNAME === "prithvi") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }

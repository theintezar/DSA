
Take out maximum Ended
Description

Given an array of integers and a number k, find the maximum sum of a subarray of size k.


Input
Input Format

First line consists of two integers n and k separated by space

Second line consists of n integers separated by spaces.

Constraints

1 <= n <= 10^7

1 <= k <= 10^6


Output
Print the maximum sum of a subarray of size k.


Sample Input 1 

10 3
-1 -1 -2 1 -2 4 1 9 3 9
Sample Output 1

21


code

function maxTake(arr, n, k){
    let max = -Infinity;
    let add = 0;
    for (let i = 0; i< n; i++) {
        if (i >= k) {
            add+= arr[i];
            add = add - arr[i-k]
        }else {
            add = add + arr[i];
        }
        if (add > max) {
            max = add;
        }
    }
    return max;
}
function runProgram(input) {
  var input=input.trim().split("\n");
  var [n, k] = input[0].split(" ").map(Number);
  var arr = input[1].split(" ").map(Number);
  console.log(maxTake(arr, n, k))
   
  }
  if (process.env.USER === "intezar") {
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
  
  
  
  
  
 // Pseudo Code

function takeOutMaximum(arr,k){
        max = 0;
        sum = 0;
        for (i=0;i<k;i++) {
          sum += arr[i];
        }
        max = Maximum(sum,max);
        for (i=k;i<arr.length;i++){
          sum -= arr[i-k];
          sum += arr[i];
          max = Maximum(sum,max);
        }
        return max;
}

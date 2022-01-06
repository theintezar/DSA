Two sum Ended
Description

Given a sorted array of integers, return indices of two numbers such that they add up to a target value.

Print -1 -1 if not found.


Input
First line contains T, number of test cases

Second line contains N and B where N is the size of the array and B is the target sum

1 <= T <= 10

2 <= N <= 1000, 2 <= B <= 3e5

1 <= Ai <= 1e5

it is guaranteed that sum of N over all test cases is at most 1000.


Output
Two values a, b i.e. indexes of any two elements that are found else -1 -1 if not found. Indexing is 0 based indexing. If multiple solutions exist, output the one with the lowest values of a and b.

Note - the answer should print the smaller index first followed by the larger index. The smallest such index pair should be printed.

If we have 2 sorted pairs [a1, b1] and [a2, b2], the first pair is said to be smaller than the second one if a1 < a2 or (a1 == a2 and b1 < b2 )


Sample Input 1 

3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49
Sample Output 1

0 1
3 4
-1 -1



//code
function twoSum(N,K,arr){

  var idx_i=-1, idx_j =-1;
  for(var i=0; i<N; i++){
  for(var j=i+1; j<N; j++){
   if((arr[i]+arr[j]==K) && idx_i==-1 && idx_j ==-1){
    idx_i=i;
     idx_j=j;
   }
  }
}
  console.log(idx_i,idx_j);
}

function runProgram(input) {
  var input=input.split("\n");
  for(var i=0; i<input.length; i++){
   input[i]=input[i].trim().split(" ").map(Number);
    }
  var test = input[0];
  var line=1;
  for(var i=1; i<=test; i++){
  var [N,K] = input[line++];
    var arr=input[line++];
    twoSum(N,K,arr);
  }
   
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





Pseudo Code
function twoSum(array,k){
        left = 0
        right = array.length - 1
        while(left < right){
                sum = array[left] + array[right]
                if (sum == k) return {left, right}
                else if (sum > k) right--;
                else{
                        left++
                }
        }
        return -1
}

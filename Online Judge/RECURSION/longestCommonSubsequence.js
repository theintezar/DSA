Similar texts Ended
Description

Virat and Rohit don't like each other though they have many similarties. You are given 2 texts (strings) written by Virat and Rohit. Your task is to write a program that calculates the length of longest similar characters in the text written by both.

If string written by Virat is “AGGTAB” and that by Rohit is “GXTXAYB”, then the longest set of similar characters is “GTAB”, which is of length 4.

Please note that the longest set of similar characters need not be continuous.


Input
Input Format :

First line contains text/string written by Virat

Second line contains text/string written by Rohit

Constraints :

Length of string <= 1000


Output
Print the length as per conditions given in problem statement


Sample Input 1 

AEDFHR
ABCDGH
Sample Output 1

3


//code

let map = {};
function lcs(s1, s2, m, n){
   if(m==0 || n==0) return 0;
   let key = `${m}-${n}`;
   if(!(key in map)){
       if(s1[m-1] == s2[n-1]){
           map[key] = lcs(s1, s2, m-1, n-1) + 1;
       }else{
           map[key] = Math.max(lcs(s1, s2, m-1, n), lcs(s1, s2, m, n-1))
       }
   }
   return map[key];
}
    
    
function runProgram(input) {
    input = input.trim().split("\n");
    var s1 = input[0].trim().split("");
    var s2 = input[1].trim().split("");
    var m = s1.length;
    var n = s2.length;
    console.log(lcs(s1, s2, m, n));
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




//recursion
Code
def lcs(X, Y, m, n):
    if m == 0 or n == 0:
        return 0;
    elif X[m-1] == Y[n-1]:
        return 1 + lcs(X, Y, m-1, n-1);
    else:
        return max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n));
Approach is good but it is time consuming.
Time Complexity is O(2^n).
DP Solution
DP = Recursion + Memoization
Code
def lcs(X, Y):
    m = len(X)
    n = len(Y)

    # Here we are creating a 2d Matrix 
    L = [[None]*(n + 1) for i in range(m + 1)]

    for i in range(m + 1):
        for j in range(n + 1): 
            if i == 0 or j == 0 :
                L[i][j] = 0
            elif X[i-1] == Y[j-1]:
                L[i][j] = L[i-1][j-1]+1
            else:
                L[i][j] = max(L[i-1][j], L[i][j-1])
    return L[m][n]

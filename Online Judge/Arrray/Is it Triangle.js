Is it Triangle ? -1:46:26
Description

Given the lengths of 3 sticks, find out if it is possible to form a triangle of a positive area. (Non-Degenerate Triangle).


Input
The first line of the input contains one integer t (1 ≤ t ≤ 1000) — the number of test cases. Then t test cases follow.

The first line of each test case contains 3 integers a,b,c (1 ≤ a,b,c ≤ 100) — the lengths of the 3 sticks.


Output
For each test case, print the answer: "Yes" if possible, else "No".


Sample Input 1 

4
4 5 13
7 1 8
2 5 4
2 2 2
Sample Output 1

No
No
Yes
Yes



//code

function check(arr){
        arr.sort((a, b)=>(a-b));
        if(arr[0]+arr[1]>arr[2]) return "Yes";
        else return "No";
    }
    function runProgram(input) {
        input = input.split("\n");
        var t  = +input[0];
        for(var i = 1; i<=t; i++){
            var arr = input[i].split(" ").map(Number);
            console.log(check(arr));
        }
       
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

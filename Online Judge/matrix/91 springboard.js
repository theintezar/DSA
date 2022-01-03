Problem Statement:
Given a N X M board, where N is the no. of rows and M is the no. of columns . Each cell contains a value of 1 to 100 on it. We have to choose the number from each row such that sum of numbers should be maximum possible.

Conditions :

Begin Choosing the number from first row and then move to next row. Repeat it untill you reach the last row.
While moving to next row, either move below the current element or diagonally.
Compute maximum possible sum possible starting from first row to till last row.

Hint:
Use another array to keep track of maximum sum of element for previous row.

Short Explaination
Move in the increasing order of the row and keep track of sum of max element of the neighbours of previous row using temp array,For Example : For i = 1 j = 0 val1 = array[i][j] + max(temp[j], temp[j+1])

Detailed Explaination:
* Given a board of N X M square , where N is the No.rows and M is the No.of column.We need to find maximum possible sum.
* To find maximum possible sum, We will consider each row start from beginning, and maintain a temp array where we will keep track of sum of max values of each position(either it could be left, right or diagonal) of previous row.
* We will keep on repeating this step untill we reach the last row.
* At last, we will return the max of the temp array.
* For Example : Given array = [3 1 7 4,
                               2 1 3 1,
                               1 2 2 1]
                temp = [3 1 7 4]
                a) Traverse the loop from second row
                b) we will take each element of the array of second row and add it with max of neighbour of that index in temp.
                Suppose, 
                i = 1 j = 0
                val1 =  array[i][j] + max(temp[j], temp[j+1]) 

                i = 2 j = 1
                val2 = array[i][j] + max(temp[j-1], temp[j], temp[j+1]) 

                c) Similarly, we calculate the val3 and val4.
                d) temp = [val1 val2 val3 val4]
                e) Similarly, We repeat the same steps with the 3rd row then 4th row using updated temp value
                f) At the end, we will return the maximum element of the temp.
                
                
                Sample Input 1 

1
6 5
3 1 7 4 2
2 1 3 1 1
1 2 2 1 8
2 2 1 5 3
2 1 4 4 4
5 2 7 5 1
Sample Output 1

32


//code

function pathCost(array, n, m){

   result = array[0]
   for(var i  = 1 ; i<n; i++){
        temp = []
        for(var k = 0; k<m; k++){
            if (k == 0) temp.push( array[i][k] + Math.max(result[k],result[1]))
            else if(k == m-1) temp.push( array[i][k] + Math.max(result[k], result[k-1]))
            else temp.push(array[i][k] + Math.max(result[k], result[k-1], result[k+1]))
        
        }
        
        result = temp;
   }
   
  return Math.max(...result);
   
}
function runProgram(input) {
    input = input.split("\n");
    var line = 0;
    var t = +input[line++];
    while(t--!==0) {
        var[n, m] = input[line++].split(" ").map(Number);
        var arr = [];
        for(let i=0; i<n; i++) {
            arr[i] = input[line++].split(" ").map(Number);
        }
        console.log(pathCost(arr, n, m));
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

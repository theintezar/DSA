function water(arr, n){
    var res = 0;
    for (let i = 1; i<n-1; i++) {
        var left = arr[i];
        for (let j=0; j<i; j++)
          left = Math.max(left, arr[j]);
          var right = arr[i];
          for (let j=i+1; j<n; j++)
          right = Math.max(right, arr[j]);
          res = res + (Math.min(left, right) - arr[i]);
    }
    return res;
}



function runProgram(input) {
   input = input.split("\n");
   var t = +input[0];
   var line = 1;
   for(let i = 0; i<t; i++){
       let n = +input[line++]
       let arr = input[line++].split(" ").map(Number);
       console.log(water(arr, n));
   }
   
  }
  if (process.env.USERNAME === "") {
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




optimal way

function rainWater(N,arr){
      let left = 0,right = arr.length - 1, maxLeft = 0, maxRight = 0, total = 0;
    
    while(left < right){
        
        if(arr[left] < arr[right]){
            if(arr[left] > maxLeft){
                maxLeft = arr[left]
            }
            else{
                total += maxLeft - arr[left] 
            }
            left++
        }
        else{
             if(arr[right] > maxRight){
                maxRight = arr[right]
            }
            else{
                total += maxRight - arr[right] 
            }
            right--
        }
        
    }
    
    console.log(total)
     
  

}

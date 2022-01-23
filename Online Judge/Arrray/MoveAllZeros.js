var moveZeroes = function(arr) {
 let j=0, temp;
    let n = arr.length;

    for(i=0;i<n;i++)
    {
        if(arr[i]!=0 && arr[j]==0)
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        if(arr[j]!=0)
            j+=1;
    }
};



input
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

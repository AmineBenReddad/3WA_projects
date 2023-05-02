function oddeven(n)
{
    if (n % 2 == 0)
    {
        console.log("This is even");
    }
    else
    {
        console.log("This is odd")
    }
}

console.log(oddeven(11))

let arr = [1,2,3,4,5,6,7,8,9]

function ArrSum(arr)
{
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

console.log(ArrSum(arr));

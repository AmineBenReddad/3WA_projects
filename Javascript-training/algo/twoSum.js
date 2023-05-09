const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target){
                return [i  ,j]
            }
        }
        
    }
    return "No target"
}

console.log(twoSum([1,3,5], 6));
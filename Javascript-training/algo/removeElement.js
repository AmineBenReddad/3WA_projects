const removeElement = (arr, elm) =>{
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != elm)
        arr2.push(arr[i])
    }
    return arr2
}

console.log(removeElement([1,5,9,8,6,5,3,1], 1));
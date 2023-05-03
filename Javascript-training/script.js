let arr = ["Amine", "Abdellah", "Ismail", "Salam"]
let str = "test"
let i = 1
let max = arr[0].length
while (i < arr.length) {
    if (arr[i].length >= max)
    {
        max = arr[i].length
        str = arr[i]
    }
    i++
}
console.log(max + " " + str) ;
function wordLength(str)
{
    let arr = str.split(" ")
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length){
            max = arr[i]
        }
        
    }
    return "The longest word is " + max + " with " + max.length + " character"
}

console.log(wordLength("Amine Ben Reddad kugiugifiyfiyfyifiyf Ismail Wafid"));


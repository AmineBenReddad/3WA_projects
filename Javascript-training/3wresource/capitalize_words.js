function capitalize_words(str)
{
    let arr = str.split(" ")
    let x = []
    for (let i = 0; i < arr.length; i++) {
        x.push(arr[i][0].toUpperCase() + arr[i].slice(1))
    }
    return x.join(" ")
}

console.log(capitalize_words("ukhqudc izizi sbsss"));
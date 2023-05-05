function translate(str)
{
    let arr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "t")
        {
            arr.push("u")
        }
        else{
            arr.push(str[i])
        }
    }
    return arr.join("").toUpperCase()
}

console.log(translate("gcat"));


function x(str)
{
    let str2
    for (let i = 0; i < str.length; i++) {
        let str1 = str.toUpperCase()
        str2 = str1.replace("T", "U")
        
    }
    return str2.toUpperCase()
}

console.log(x("izeHGYGcdht"));
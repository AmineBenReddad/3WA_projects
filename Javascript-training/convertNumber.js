function convert(n)
{
    str = n.toString()
    let arr = []
    if (n >= 0)
    {
        let num = (str.split("").reverse())
        for (let i = 0; i < num.length; i++) {
            arr.push(parseInt(num[i]))
            
        }
        return arr
    }
    else 
        return ("invalid number")
}

console.log(convert(4357));
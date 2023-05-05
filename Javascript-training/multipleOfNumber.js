function multiple(n, u)
{
    let arr = []
    let i = n
    while(i <= u)
    {
        if(i % n == 0)
        {
            arr.push(i)
        }
        i++
    }
    return arr
}

console.log(multiple(2, 17));
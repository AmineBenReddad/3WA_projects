function factorial(n)
{
    let res = 1
    for (let i = n; i > 1; i--) {
        res = res * i
        
    }
    return res
}

console.log(factorial(5));
const isEqualTo100 = (a, b) => {
    let sum = a + b

    if (a == 100 || b == 100 || sum == 100) {
        return true
    }
    else return false
}

console.log(isEqualTo100(70, 20));
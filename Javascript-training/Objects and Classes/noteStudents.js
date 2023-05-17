let student = {
    name: "Amine",
    age: 26,
    notes: [10,5,7,8,9,7,9]
}

let graduation = (student) => {
    let arr = student.notes
    let s = 0
    let gn = 0
    for (let i = 0; i < arr.length; i++) {
        s += arr[i]
    }
    gn = s / arr.length
    if (gn >= 10){
        return "Congratulations!!"
    }
    else {
        return "Hard luck!!"
    }
}

console.log(graduation(student));


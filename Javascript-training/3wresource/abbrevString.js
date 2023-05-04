function abbrevName(name)
{
    for (let i = 0; i < name.length; i++) {
        if (name[i] == " ")
        {
        console.log(name.slice(0, i+=2) + ".");
        break
        }
    }
}
function x(str){
    let arr = str.split(" ")
    console.log(arr);
    return arr[0] + " " + arr[1][0] + "."
}

abbrevName("jygiyg ygigi")

console.log(x("jygiyg ygigi"));
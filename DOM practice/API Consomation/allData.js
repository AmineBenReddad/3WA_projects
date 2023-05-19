async function getuser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data
}

getuser().then((a) => {
    console.log(a);
})
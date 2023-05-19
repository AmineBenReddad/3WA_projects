async function getuser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data
}

getuser().then((a) => {
    a.forEach(e => {
        if (e.id == 5){
            console.log(e);
        }
    })
})
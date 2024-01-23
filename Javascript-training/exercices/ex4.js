const currentDate = () => {
    const d = new Date();
    return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
}

console.log(currentDate());
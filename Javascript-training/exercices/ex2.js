const getIndexExtension = (str) => {
    let r = str.slice(str.lastIndexOf('.'))
    return r
}

console.log(getIndexExtension("index.js"));
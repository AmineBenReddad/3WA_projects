const moveCharForward = (str) => {
    let r = str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    return r
}

console.log(moveCharForward("fatima"));
function lastWord(str)
{
    let str1 = str.trim().split(" ")
    return ("The last word is \"" + str1[str1.length -1] + "\" with length " + str1[str1.length -1].length)
}


console.log(lastWord("dscsdc dd amine "));
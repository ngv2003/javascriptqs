function fixStart(str) {
    var firstChar = str.charAt(0);

    var result = firstChar + str.slice(1).replace(new RegExp(firstChar, 'g'), '*');
    
    return result;
}

console.log(fixStart('babble'));
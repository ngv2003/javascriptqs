function notBad(str) {
    var indexNot = str.indexOf('not');
    var indexBad = str.indexOf('bad');

    if (indexNot !== -1 && indexBad !== -1 && indexBad > indexNot) {
        return str.slice(0, indexNot) + 'good' + str.slice(indexBad + 3);
    }
    else 
    {
        return str;
    }
}

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));

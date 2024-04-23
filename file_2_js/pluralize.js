function pluralize(noun, number) {
    if (noun === 'sheep' || noun === 'geese') {
        return number + ' ' + noun;
    } else {
        if (number === 1) {
            return number + ' ' + noun;
        } else {
            return number + ' ' + noun + 's';
        }
    }
}


console.log(pluralize('cat', 5)); 
console.log(pluralize('dog', 1)); 
console.log(pluralize('sheep', 3));
console.log(pluralize('geese', 2));

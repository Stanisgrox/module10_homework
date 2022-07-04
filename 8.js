let map = new Map([
    ["apple", "green"],
    ["strawberry","red"],
    ["blueberry","blue"]
]);

function logArrayElements(element, index, array) {console.log('Ключ - ' + index + ', значение -  ' + element);}

map.forEach(logArrayElements);
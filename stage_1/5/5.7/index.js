/* Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

Например: */

function unique(arr) {
    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// console.log(unique(values));

/* Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например: */

function aclean(arr){
    map = new Map();
    arr.forEach(element=>{
        const strLowerCase = element.toLowerCase()
        const charArray = Array.from(strLowerCase)
        const filtredCharArray = charArray.sort();
        map.set(filtredCharArray.join(''), element)
    })
    return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

/* Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод.push.

Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
Почему ? Что нужно поправить в коде, чтобы вызов keys.push сработал ? */

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
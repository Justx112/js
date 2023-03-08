/* Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.Например:

ucFirst("вася") == "Вася"; */

function ucFirst(str){
    let firstLetter = str[0].toUpperCase();
    return firstLetter + str.slice(1)
}

console.log(ucFirst("вася") == "Вася")

/* Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */

function checkSpam(str){
    let formatedStr = str.toLowerCase()

    if (formatedStr.indexOf('xxx') >= 0 || formatedStr.indexOf('viagra') >= 0) return true

    return false
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))

/* Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…" */

function truncate(sourceStr, numberOfLetter){
    let dot = sourceStr.length < numberOfLetter ? '' : '…'
    return sourceStr.slice(0, numberOfLetter - 1) + dot
}

/* Есть стоимость в виде строки "$120".То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert(extractCurrencyValue('$120') === 120); */

function extractCurrencyValue(sourceStr){
    return Number(sourceStr.slice(1))
}

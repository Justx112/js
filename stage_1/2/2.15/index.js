/* Следующая функция возвращает true, если параметр age больше 18.

В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}
Будет ли эта функция работать как - то иначе, если убрать else?

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}

Ответ: разницы нет
*/

/* Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор || */

function checkAge(age) {
    return age > 18 ? true : confrim('Родители разрешили?')
}

function checkAge(age) {
    return age > 18 || confrim('Родители разрешили?')
}

/* Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b. */

function min(a, b){
    return a > b ? b : a
}

/* Напишите функцию pow(x, n), которая возводит x в степень n и возвращает результат. */

function pow(a,b){
    if (a < 1 || b < 1 || !Number.isInteger(a) || !Number.isInteger(b)){
        alert('Одно или несколько чисел не целые или меньше 1')
        return
    }
    alert(a**b)
}

pow(+prompt('Введите чистоло х'), +prompt('Введите число y'))
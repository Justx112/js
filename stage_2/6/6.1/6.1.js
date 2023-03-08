/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

    Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к.sumTo(n) = n + sumTo(n - 1) for n > 1.
С использованием формулы арифметической прогрессии. */

function sumTo(number) {
    let sum = 0
    for (let i = number; i !== 0; i--) {
        sum += i
    }
    return sum
}

console.log(sumTo(100))

function sumTo(number) {
    return number === 1 ? 1 : number + sumTo(number - 1)
}

console.log(sumTo(100))

function sumTo(number) {
    return number * (number + 1) / 2
}

console.log(sumTo(100))

/* Факториал натурального числа – это число, умноженное на "себя минус один",
затем на "себя минус два", и так далее до 1. Факториал n обозначается как n! */

function factorial(number) {
    return number === 1 ? 1 : number * factorial(number - 1)
}

console.log(factorial(5))

/* Последовательность чисел Фибоначчи определяется формулой Fn = Fn - 1 + Fn - 2. То есть,
следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1 + 1), затем 3(1 + 2), 5(2 + 3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n - е число Фибоначчи. */

// Не знаю законно это или нет). Но это точно оптимизированно, и вызов функции все еще требует одного аргумента
function fib(n, currentNumber = 1, previusNumber = 0) {
    let newN = n - 1
    return newN == 1 ? currentNumber + previusNumber : fib(newN, currentNumber + previusNumber, currentNumber)
}

console.log(fib(77));

/* Допустим, у нас есть односвязный список(как описано в главе Рекурсия и стек):

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без ? */

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(obj) {
    console.log(obj.value)
    if (obj.next) printList(obj.next)
}

printList(list)

function printList(obj) {
    let obj = obj;

    while (obj) {
        alert(obj.value);
        obj = obj.next;
    }
}

printList(list)


/* Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например: */

function sumSalaries(obj){
    return Array.from(Object.values(obj)).reduce((prev, current) => prev+current ,0)
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries)); // 650

/* Напишите функцию count(obj), которая возвращает количество свойств объекта: */

function count(obj){
    return Array.from(Object.keys(obj)).length
}

let user = {
    name: 'John',
    age: 30
};

console.log(count(user)); // 2
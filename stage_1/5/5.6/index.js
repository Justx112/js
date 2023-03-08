/* Напишите функцию camelize(str), которая преобразует строки вида «my - short - string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

    Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition'; */

function camelize(str) {
    const charArr = str.split('')
    let toUpper = false
    return charArr.map((elem) => {
        if (elem === '-') {
            toUpper = true
            return ''
        }
        if (toUpper) {
            toUpper = false
            return elem.toUpperCase()
        }
        return elem
    }).join('')
}


/* Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (совпадающие значения)

alert(arr); // 5,3,8,1 (без изменений) */

function filterRange(arr, moreNumber, lessNumber) {
    return arr.filter(elem => elem >= moreNumber && elem <= lessNumber)
}

/* Напишите функцию filterRangeInPlace(arr, a, b),
которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b.То есть,
проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать. */

let source = [5, 3, 8, 1]

function filterRangeInPlace(arr, start, end) {
    let index = 1;
    while (true) {
        index = arr.findIndex(elem => !(elem >= start) || !(elem <= end))

        if (index === -1) return

        arr.splice(index, 1)
    }
}

/* Сортировать в порядке по убыванию */

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a)

/* У нас есть массив строк arr.Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию. */

let array = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.map(elem => elem).sort()
}

// let sorted = copySorted(array);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(array); // HTML, JavaScript, CSS (без изменений)


/* Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во - первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в
формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert(calc.calculate("3 + 7")); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.Он принимает оператор name и функцию с двумя аргументами func(a, b), которая описывает его.

    Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок. */

function Calculator() {
    this['+'] = (a,b)=>a+b
    this['-'] = (a,b)=>a-b

    this.calculate = (str)=>{
        const strArr = str.split(' ')
        if (isNaN(+strArr[0]) || isNaN(+strArr[2]) || str[1] === undefined) return NaN
        return this[strArr[1]](+strArr[0], +strArr[2])
    }

    this.addMethod = (str, callback) => {
        this[str] = callback
    }
}

let powerCalc = new Calculator;

// console.log(powerCalc.calculate("3 + 7"))

powerCalc.addMethod("**", (a, b) => a ** b);

// console.log(powerCalc.calculate("2 ** s"))

/* У вас есть массив объектов user, и в каждом из них есть user.name.Напишите код, который преобразует их в массив имён.

Например: */

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(elem=>elem.name)

// console.log(names); // Вася, Петя, Маша

/* У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

Например: */

vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };

users = [vasya, petya, masha];

let usersMapped = users.map(elem => {
    elem.fullName = `${elem.name} ${elem.surname}`;
    delete elem.name
    delete elem.surname
    return elem
})

// console.log(usersMapped[0].id) // 1
// console.log(usersMapped[0].fullName)

/* Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например: */

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };

arr = [vasya, petya, masha];

function sortByAge(arr) {
    arr.sort((a, b)=>a.age - b.age)
}

sortByAge(arr);

// теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

/* Напишите функцию shuffle(array), которая перемешивает(переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов.Например: */

function random(len){
    return Math.round(len * Math.random())
}

function shuffle(arr) {
    return arr.sort(Math.random() - 0.5)
}

arr = [1, 2, 3];

// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 29 };

arr = [vasya, petya, masha];

function getAverageAge(arr) {
    let sum = arr.reduce((prev, current) => prev + current.age, 0);
    return sum/arr.length
}


// console.log(getAverageAge(arr))


function unique(arr) {
    return arr.filter((elem, index, arr) => index === arr.lastIndexOf(elem))
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

// console.log(unique(strings));

/* Допустим, мы получили массив пользователей в виде { id:..., name:..., age:... }.

Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

Например: */


function groupById(arr) {
    const resultObj = {}
    return arr.reduce((prev, current) => {prev[current.id] = current; return prev} ,{})
}

users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

console.log(usersById)

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
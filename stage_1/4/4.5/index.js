/* Возможно ли создать функции A и B, чтобы new A() == new B() ?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert(a == b); // true
Если да – приведите пример вашего кода. */

let templateObject = {}

function A() { 
    return templateObject
}
function B() { 
    return templateObject
}

let a = new A();
let b = new B();

console.log(a === b)

/* Создайте функцию - конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul()); */

function Calculator() {

    this.read = function() {
        this.a = +prompt('Введите значение а');
        this.b = +prompt('Введите значение b');
    }

    this.sum = function() {
        return this.a + this.b
    }

    this.mul = function() {
        return this.a * this.b
    }
}

/* Создайте функцию - конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value.Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue. */

function Accumulator(value){
    this.value = value;

    this.read = function(){
        this.value += +prompt('Введите число')
    }
}

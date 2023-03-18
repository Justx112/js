/* В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

Сначала у нас есть такой код:

function Rabbit() { }
    Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

alert(rabbit.eats); // true
Добавим одну строчку(выделенную в коде ниже).Что вызов alert покажет нам сейчас ?

function Rabbit() { }
    Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert(rabbit.eats); // ?


Ответ: true


…А если код такой(заменили одну строчку) ?

function Rabbit() { }
    Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert(rabbit.eats); // ?


Ответ: false


Или такой(заменили одну строчку) ?

function Rabbit() { }
    Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert(rabbit.eats); // ?


Ответ: true


Или, наконец, такой:

function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert(rabbit.eats); // ? 

Ответ: undefined

*/


/* Представьте, что у нас имеется некий объект obj,
созданный функцией - конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так ?

let obj2 = new obj.constructor();

Приведите пример функции - конструктора для объекта obj, с которой такой вызов корректно сработает.И пример функции - конструктора,
с которой такой код поведёт себя неправильно. 

Ответ: Да, в большинстве случаев. Может не сработать если кто то сменил constructor у объекта "донора". Например:

*/

function SomeFunction(message){
    this.message = message;
}

function SecondMessage(message){
    this.incorrectMessage = message
}

const obj1 = new SomeFunction('message')

obj1.constructor = SecondMessage

const obj2 = new obj1.constructor('new message')

console.log(obj2.message)




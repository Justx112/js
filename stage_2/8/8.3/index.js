// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:

function f() {
    console.log("Hello!");
}

Function.prototype.defer=function(delay){
    setTimeout(this, delay)
}

f.defer(1000); // выведет "Hello!" через 1 секунду

/* Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так: */

function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function(delay){
    const func = this
    return function() {
        setTimeout(()=>func.apply(this, arguments), delay) 
    }
}

f.defer(5000)(1, 2); // выведет 3 через 1 секунду.

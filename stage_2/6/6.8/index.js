/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout. */

function printNumbers(from, to){
    let i = from
    setTimeout(function loopFunction(){
        console.log(i++)
        if(i>=to) return
        else setTimeout(loopFunction, 1000)
    },1000)
}

function printNumbers(from, to) {
    let i = from
    let idInterval = setInterval(()=> {
        console.log(i++)
        if (i>=to) clearInterval(idInterval)
    } , 1000)
}

printNumbers(1, 5)

/* В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция ?

После цикла.
Перед циклом.
В начале цикла.
Что покажет alert ? */

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
    i++;
}

// Ответ: timeout выполниться после цикла, выведеться 100000000

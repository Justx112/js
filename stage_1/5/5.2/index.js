/* Создайте скрипт, который запрашивает ввод двух чисел(используйте prompt) и после показывает их сумму. */

let firstNumber = +prompt('Введите первое число')
let secondNumber = +prompt('Введите второе число')

alert(firstNumber + secondNumber)

/* Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

Например:

alert(1.35.toFixed(1)); // 1.4
Но почему в примере ниже 6.35 округляется до 6.3 ?

alert(6.35.toFixed(1)); // 6.3
Как правильно округлить 6.35 ? 

Ответ: не правильно округляет из-за стандарта ieee-754
*/

console.log(Math.round(6.35 * 10) / 10)

/* Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null. */

function readNumber(){
    let answer = null;
    do{
        answer = prompt('Введите число')

        if (answer === '' || answer === null) return null

    } while (Number(answer) !== NaN)

    return Number(answer)
}

/* Этот цикл – бесконечный.Он никогда не завершится, почему ?

let i = 0;
while (i != 10) {
    i += 0.2;
} 

Ответ: Стандарт ieee-754

*/

/* Встроенный метод Math.random() возвращает случайное число от 0(включительно) до 1(но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max(но не включая max).

Пример работы функции:

alert(random(1, 5)); // 1.2345623452
alert(random(1, 5)); // 3.7894332423
alert(random(1, 5)); // 4.3435234525 */

function random(min, max) {
    let span = max-min
    return (Math.random() * span + min)
}

/* Напишите функцию randomInteger(min, max), которая генерирует случайное целое(integer) число от min до max(включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert(randomInteger(1, 5)); // 1
alert(randomInteger(1, 5)); // 3
alert(randomInteger(1, 5)); // 5 */

function randomInteger(min, max) {
    let span = max - min
    return Math.round(Math.random() * span + min)
}

// Я понял, что решение не правильное, но свой провал скрывать не хочу.
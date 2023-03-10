/* Что выведет следующий код ?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // ? 

Ответ: 4
*/

/* Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок - н - ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок - н - ролл
Джаз, Классика, Рок - н - ролл
Классика, Рок - н - ролл
Рэп, Регги, Классика, Рок - н - ролл */

style = ['Джас', 'Блюз']

style.push('style')

style[Math.ciel(style.length / 2)] = 'Классика'

console.log(style.shift())

style.unshift('Рэп', 'Регги')

/* Каков результат ? Почему ?

    let arr = ["a", "b"];

arr.push(function () {
    alert(this);
});

arr[2](); // ? 

Ответ: в alert выведется array.toString()
*/

/* Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S.Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0». */

function sumInput() {
    let summ = [];
    let input = 0;
    while(true){
        input = prompt('Введите чилос')
        if (input === '' || !+input){
            for(let elem of summ){
                input += elem
            }
            return input
        }
        summ.push(+input)
    }
}

/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму. */

function getMaxSubSum(arr) {
    let sum = 0;
    let max = 0;
    for(let elem of arr){
        sum = elem + sum <= 0 ? 0 : elem + sum
        max = Math.max(max,sum)
    }
    return max
}
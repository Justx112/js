/* Что выведет код ниже ?

alert(null || 2 || undefined); 

Ответ: 2
*/

/* Что выведет код ниже ?

alert(1 && null && 2);

Ответ: null */

/* Что выведет код ниже?

alert(alert(1) && alert(2));

Ответ: 1, undefined */

/* Что выведет код ниже ?

alert(null || 2 && 3 || 4);

Ответ: 3 */

/* Напишите условие if для проверки,
что переменная age находится в диапазоне
между 14 и 90 включительно.

«Включительно» означает,
что значение переменной
age может быть равно 14 или 90. */

if(age >= 14 && age <= 90){}

/* Напишите условие if для проверки,
что значение переменной
age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта:
первый с использованием оператора НЕ!,
второй – без этого оператора. */

if (!(age >= 14 && age <= 90)){}

if(age < 14 || age > 90){}

/* Какие из перечисленных ниже alert выполнятся ?
Какие конкретно значения будут результатами выражений в условиях if (...)? 

if (-1 || 0) alert( 'first' ); - выполнится, -1
if (-1 && 0) alert( 'second' ); - не выполнится, 0
if (null || -1 && 1) alert( 'third' ); выполнится, 1
*/

const correctName = 'Админ'
const correctPassword = 'Я Главный'
const cancelMessage = 'Отмененно'

let currentName = prompt('Кто там?', '')

if (currentName === correctName){
    const getPassword = prompt('Пароль?', '')
    if (getPassword === correctPassword){
        alert('Здраствуйте')
    } else if (getPassword !== '' || null){
        alert('Неверный пароль')
    } else {
        alert(cancelMessage)
    }
} else if (currentName === '' || null){
    alert(cancelMessage)
}else {
    alert('Я вас не знаю')
}




/* Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

const user = {}

user.name = 'John'

user.surname = 'Smith'

user.name = 'Pete'

delete user.name

/* Напишите функцию isEmpty(obj), которая возвращает true,
если у объекта нет свойств, иначе false. */

function IsEmpty (object) {
    for(let props in object){
        return Boolean(props)
    }
    return false
}

/* const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete";

Ответ: да

*/

/* У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0. */

function GetSum(object){
    let sum = 0
    for(let key in object){
        sum += object[key]
    }
    return sum
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

/* Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2. */

function multiplyNumeric(object) {
    for (let key in object){
        if (typeof object[key] === 'number') object[key] *= 2
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);





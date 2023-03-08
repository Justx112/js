/* 1.Выведется ли alert ?

if ("0") {
    alert('Привет');
}

Ответ: да, выведется */

// 2. Если пользователь вводит «ECMAScript», то показать: «Верно!»,
// в противном случае – отобразить: «Не знаете ? ECMAScript!»

let answerNameOfJS = prompt('Какое "оффициальное" название JavaScript')

if(answer.toLowerCase() === "ECMAScript".toLowerCase()){
    alert('Верно')
} else{
    alert('Не знаете? “ECMAScript”!')
}

// Используя конструкцию if..else, напишите код, который получает число через prompt,
// а затем выводит в alert:

let answerInputNumber = +prompt('Введите число')

if (answerInputNumber > 0){
    alert(1)
}
else if (answerInputNumber < 0){
    alert(-1)
}
else{
    alert(0)
}

/* Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
} */

result = a + b < 4 ? 'Мало' : 'Много'

/* Перепишите if..else с использованием нескольких операторов '?'.

let message;

if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
} */

message = login == 'Сотрудник' ? 'Привет' :
    login == 'Директор' ? 'Здраствуйте' :
    login == '' ? 'Нет логина' : ''
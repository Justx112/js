/* Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.Временная зона – местная.

Для вывода используйте alert. */

let testDate = new Date(2012, 01, 20, 3, 12, 00)

/* Напишите функцию getWeekDay(date),
 показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС». */

function getWeekDay(date){
    switch(date.getDay()){
        case 0:
            return 'ВС'
        case 1:
            return 'ПН'
        case 2:
            return 'ВТ'
        case 3:
            return 'СР'
        case 4:
            return 'ЧТ'
        case 5:
            return 'ПТ'
        case 6:
            return 'СБ'
    }
}

console.log(getWeekDay(testDate))

/* В Европейских странах неделя начинается с понедельника(день номер 1), затем идёт вторник(номер 2) и так до воскресенья(номер 7).
Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert(getLocalDay(date));       // вторник, нужно показать 2 */

function getLocalDay(Date){
    return Date.getDay() === 0 ? 7 : Date.getDay()
}

console.log(getLocalDay(testDate))

/* Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days = 365 и больших значениях:

let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)
P.S.Функция не должна изменять переданный ей объект date. */

let date = new Date(2015, 0, 2);

function getDateAgo(date, count){
    const localDate = new Date(date)
    localDate.setDate(date.getDate() - count)
    return localDate.getDate()
}

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

/* Напишите функцию getLastDayOfMonth(year, month),
возвращающую последнее число месяца.Иногда это 30, 31 или даже февральские 28 / 29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29(високосный год, февраль). */

function getLastDayOfMonth(year, month){
    let date = new Date(year, month + 1, 0)
    return date.getDate()
}

/* Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10: 00, и не было перехода на зимнее / летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е.в ней не должно быть конкретного значения сегодняшней даты. */

function getSecondsToday(){
    const time = new Date()
    return currentTime = time.getHours() * 60 * 60 + time.getMinutes() * 60 + time.getSeconds()
}

// console.log(getSecondsToday())

/* Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23: 00, то:

getSecondsToTomorrow() == 3600
P.S.Функция должна работать в любой день, т.е.в ней не должно быть конкретного значения сегодняшней даты. */

function getSecondsToTomorrow(){
    const currentDate = new Date()
    const tomorrowDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1)
    return (tomorrowDate - currentDate) / 1000
}

/* Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm".А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10: 00.
    Например:

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000))); */

function formatDate(date){
    const currentDate = new Date()
    const option = { day: '2-digit', year: '2-digit', month: '2-digit', hour:'2-digit', minute:'2-digit'}
    const diffrent = (currentDate - date) / 1000
    const _f = (str) => ('00' + str).split('').splice(-2, 2).join('')
    if (diffrent < 1) return 'прямо сейчас'
    else if (diffrent <= 60) return `${diffrent} сек. назад`
    else if (diffrent > 60 && diffrent < 3600) return `${Math.floor(diffrent / 60)} мин. назад`
    else return `${_f(date.getDate())}.${_f(date.getMonth() + 1)}.${_f(date.getFullYear())} ${_f(date.getHours())}:${_f(date.getMinutes())}`
}

console.log(formatDate(new Date(2014, 1, 1)))
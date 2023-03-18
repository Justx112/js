/* У нас есть пустой DOM - элемент elem и строка text.

Какие из этих 3 - х команд работают одинаково ?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text 

Ответ: 1, 3 */

/* Создайте функцию clear(elem), которая удаляет всё содержимое из elem. 
<ol id="elem">
  <li>Привет</li>
  <li>Мир</li>
</ol>
*/

function clear(elem) {
    elem.innerHTML = ''
}

/* В примере ниже вызов table.remove() удаляет таблицу из документа.

Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.

Почему так происходит ?

<table id="table">
  aaa
  <tr>
    <td>Тест</td>
  </tr>
</table>

<script>
  alert(table); // таблица, как и должно быть

  table.remove();
  // почему в документе остался текст "ааа"?
</script> 

Ответ в таблице не может быть текста без тега, браузер сам выбрасывает текст
за пределы таблицы*/

const targetElelm = document.querySelector('.target')

function createContent(elem) {
    let result = true
    while (true) {
        let result = prompt('Что добавитьв список?')
        if (!result) break
        let template = document.createElement('li')
        template.textContent = result
        targetElelm.insertAdjacentElement("afterbegin", template)
    }
}

// createContent(targetElelm)

/* Напишите функцию createTree, которая создаёт вложенный список ul / li из объекта.

Например: */

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

let container = document.getElementById('container');

function createTree(container, data) {
    container.innerHTML = helpFunction(data)
}

function helpFunction(object) {
    let resultHtml = ''
    for (const [key, value] of Object.entries(object)) {
        if (Object.keys(value).length) {
            resultHtml += `
            <li>${key}</li>
            <ul>${helpFunction(value)}</ul>
            `
        }
        else {
            resultHtml += `<li>${key}</li>`
        }
    }
    return resultHtml
}

createTree(container, data); // создаёт дерево в контейнере

/* Есть дерево, организованное в виде вложенных списков ul / li.

Напишите код, который добавит каждому элементу списка < li > количество вложенных в него элементов.Узлы нижнего уровня, без детей – пропускайте. */

let lis = document.getElementsByTagName('li');

for (let li of lis) {
    let descendantsCount = li.getElementsByTagName('li').length;
    if (!descendantsCount) continue;
    li.firstChild.data += ' [' + descendantsCount + ']';
}

/* Напишите функцию createCalendar(elem, year, month).

Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

Календарь должен быть таблицей, где неделя – это < tr >, а день – это < td >.
У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>,
 первым днём недели должен быть понедельник. */

function createCalendar(elem, year, month){
    let mon = month - 1;
    let d = new Date(year, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

/* Напишите код для вставки < li > 2</li > <li>3</li> между этими двумя < li >:
<ul id="ul">
    <li id="one">1</li>
    <li id="two">4</li>
</ul> */

const insertHTML = ['<li>2</li>', '<li>3</li>']

const ul = document.getElementById('ul')
let currntHTML = Array.from(ul.children).map(elem => elem.outerHTML)
currntHTML.splice(1, 0, ...insertHTML)
ul.innerHTML = currntHTML.join('\n')

/* Вот таблица:

<table>
    <thead>
        <tr>
            <th>Name</th><th>Surname</th><th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td><td>Smith</td><td>10</td>
        </tr>
        <tr>
            <td>Pete</td><td>Brown</td><td>15</td>
        </tr>
        <tr>
            <td>Ann</td><td>Lee</td><td>5</td>
        </tr>
        <tr>
            <td>...</td><td>...</td><td>...</td>
        </tr>
    </tbody>
</table>
В ней может быть больше строк.

Напишите код для сортировки по столбцу "name". */

const table = document.getElementsByTagName('table')

let arrayRows=Array.from(table.rows)
arrayRows.splice(0, 1)
arrayRows.sort((a, b) => a.cell[0].innerHTML > b.cell[0].innerHTML ? 1 : -1)

table.tBodies[0].append(...arrayRows);
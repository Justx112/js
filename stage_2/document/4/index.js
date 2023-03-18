/* Вот документ с таблицей и формой.

Как найти ?…

Таблицу с id = "age-table".
Все элементы label внутри этой таблицы(их три).
Первый td в этой таблице(со словом «Age»).
Форму form с именем name = "search".
Первый input в этой форме.
Последний input в этой форме. */

const table=document.getElementById('age-table')
table.getElementsByTagName('label')
table.getElementsByTagName('td')[0]
const form = document.getElementsByName('search')
form.getElementsByTagName('input')[0]
form.getElementsByTagName('input')[form.getElementsByTagName('input').length - 1]
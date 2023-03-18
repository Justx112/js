/* Имеется < select >
Используя JavaScript:

Выведите значение и текст выбранного пункта.
Добавьте пункт: <option value="classic">Классика</option>.
Сделайте его выбранным. 

<select id="genres">
    <option value="rock">Рок</option>
    <option value="blues" selected>Блюз</option>
</select>*/

const select = document.getElementById('genres')
alert(select.value)
Array.from(select.options).find(elem => elem.value == select.value).removeAttribute('selected')
select.add(new Option('Классика', 'classic', true, true))
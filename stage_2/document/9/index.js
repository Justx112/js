/* Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху.
А как подсчитать размер прокрутки снизу(назовём его scrollBottom) ?

Напишите соответствующее выражение для произвольного элемента elem. */

let bottomScroll = elem.scrollHeight - elem.clientHeight - elem.scrollTop

/* Напишите код, который возвращает ширину стандартной полосы прокрутки.
Для Windows она обычно колеблется от 12px до 20px.
Если браузер не выделяет место под полосу прокрутки(так тоже бывает, она может быть прозрачной над текстом),
тогда значение может быть 0px. */

let scrollWidth = elem.offsetWidth - elem.clientWidth

/* Каковы координаты центра поля ?

Вычислите их и используйте, чтобы поместить мяч в центр поля:

Элемент должен позиционироваться за счёт JavaScript, а не CSS.
Код должен работать с любым размером мяча(10, 20, 30 пикселей)
и любым размером поля без привязки к исходным значениям. */

elem.style.left = Math.round(parent.clientWidth / 2 - elem.offsetWidth / 2) + 'px';
elem.style.top = Math.round(parent.clientHeight / 2 - elem.offsetHeight / 2) + 'px';

/* В чём отличие между getComputedStyle(elem).width и elem.clientWidth ? 

Ответ: clientWidth возвращает число, getComputedStyle возвращает строку значения из css
clientWidth возвращает ширину элемента словно box-sizing: border-box
getComputedStyle размеры зависят от box-sizing
clientWidth всегда вычетает из размера полосу прокрутки
*/






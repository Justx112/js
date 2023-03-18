/* Дан список сообщений с кнопками для удаления[x].Заставьте кнопки работать. */

document.getElementById('container').addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-button')) event.target.closest('.pane').remove()
})

/* Создайте дерево, которое по клику на заголовок скрывает - показывает потомков */

document.querySelector('.tree').addEventListener('click', (event) => {
    if (event.target.classList.contains('target')) {
        Array.from(event.target.parentNode.children).forEach((elem, index) => { if (index != 0) elem.classList.toggle('hide') })
    }
})

/* Сделать таблицу сортируемой: при клике на элемент < th > строки таблицы должны сортироваться по соответствующему столбцу. */

document.querySelectorAll('th').forEach(elem => elem.addEventListener('click', (event) => {
    sortTable(event.target.cellIndex, event.target.dataset.type)
}))

function sortTable(colNum, type) {
    const tbody = document.querySelector('tbody');
    const rowsArray = Array.from(tbody.rows);
    let compareFunction;

    switch (type) {
        case 'number':
            compareFunction = (a, b) => a.cells[colNum].innerHTML - b.cells[colNum].innerHTML;
            break;
        case 'string':
            compareFunction = (a, b) => a.cells[colNum].innerHTML > b.cells[colNum].innerHTML ? 1 : -1;
            break;
    }
    rowsArray.sort(compareFunction);

    tbody.append(...rowsArray);
}

/* Напишите JS - код, реализующий поведение «подсказка».

При наведении мыши на элемент с атрибутом data - tooltip,
над ним должна показываться подсказка и скрываться при переходе на другой элемент.

В этой задаче мы полагаем, что во всех элементах с атрибутом data - tooltip – только текст.То есть, в них нет вложенных тегов(пока).

Детали оформления:

Отступ от подсказки до элемента с data - tooltip должен быть 5px по высоте.
Подсказка должна быть, по возможности, посередине элемента.
Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена, если нельзя показать сверху – показывать снизу элемента.
Текст подсказки брать из значения атрибута data - tooltip.Это может быть произвольный HTML. */
const createElement = document.createElement('div')
createElement.style.position = 'absolute'
createElement.style.backgroundColor = 'white'

Array.from(document.getElementsByTagName('button')).forEach(elem=>{elem.addEventListener('mouseover', (event) => {
    if (event.target.hasAttribute('data-tooltip')) {
        createElement.innerHTML = event.target.getAttribute('data-tooltip')
        document.body.append(createElement)
        const buttonParams = event.target.getBoundingClientRect()
        const helpParam = createElement.getBoundingClientRect()
        createElement.style.top = event.target.offsetTop - createElement.offsetHeight - 5 + 'px'
        createElement.style.left = buttonParams.left + (buttonParams.width - helpParam.width) / 2 + 'px'
    }})
})

Array.from(document.getElementsByTagName('button')).forEach(elem => {
    elem.addEventListener('mouseout', (event) => {
            createElement.remove()
    })
})
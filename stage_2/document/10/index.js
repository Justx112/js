/* В ифрейме ниже располагается документ с зелёным «полем».

Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

В документе уже реализована функциональность,
когда при клике на любом месте показываются соответствующие координаты. */

function getCoord(elem) {
    const leftTopBorder = [elem.getBoundingClientRect().left, elem.getBoundingClientRect().top]

    const rightBottomBorder = [elem.getBoundingClientRect().right, elem.getBoundingClientRect().bottom]

    const leftTopContent = [elem.getBoundingClientRect().left + elem.clientLeft, elem.getBoundingClientRect().top + elem.clientTop]

    const rightBottonContent = [elem.getBoundingClientRect().right - elem.clientLeft, elem.getBoundingClientRect().bottom - elem.clientTop]

    return {
        leftTopBorder: leftTopBorder,
        rightBottomBorder: rightBottomBorder,
        leftTopContent: leftTopContent,
        rightBottonContent: rightBottonContent,
    }
}

console.log(getCoord(document.getElementById('field')))

/* Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.

Аргумент position – строка с одним из 3 значений:

"top" – расположить elem прямо над anchor
"right" – расположить elem непосредственно справа от anchor
"bottom" – расположить elem прямо под anchor
Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи.
Она создаёт и показывает элемент -«заметку» с текстом html на заданной позиции position рядом с элементом anchor. */

/* Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position: fixed.

Это предотвратит расхождение элементов при прокрутке страницы.

Используйте решение предыдущего задания для начала.Чтобы проверить решение в условиях с прокруткой,
добавьте стиль элементу < body style = "height: 2000px" >. 

PS: Я так и не понял решение предложенное сайтом. Оно не работает, a элементы в песочнице и так создаются с родителем "document"
Если бы родителем был другой элемент то тогда были бы проблемы, но я оставил рабочий вариант без заморочек

Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование):
научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

Новые значения для аргумента position:

top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.
*/
function positionAt(anchor, position, elem) {
    const positionAnchor = anchor.getBoundingClientRect()
    const positionElem = elem.getBoundingClientRect()
    elem.style.position = 'absolute'
    switch (position) {
        case 'top-out':
            elem.style.left = positionAnchor.left + 'px'
            elem.style.top = positionAnchor.top - positionElem.height + 'px'
            break;
        case 'right-out':
            elem.style.left = positionAnchor.right + 'px'
            elem.style.top = positionAnchor.top + positionElem.height + 'px'
            break;
        case 'bottom-out':
            elem.style.left = positionAnchor.left + 'px'
            elem.style.top = positionAnchor.bottom + 'px'
            break
        case 'top-in':
            elem.style.left = positionAnchor.left + 'px'
            elem.style.top = positionAnchor.top + 'px'
            break;
        case 'right-in':
            elem.style.left = positionAnchor.right - positionElem.width + 'px'
            elem.style.top = positionAnchor.top + positionElem.height + 'px'
            break;
        case 'bottom-in':
            elem.style.left = positionAnchor.left + 'px'
            elem.style.top = positionAnchor.bottom - positionElem.height + 'px'
            break
        default:
            break;
    }
}
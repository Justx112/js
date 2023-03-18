/* Создайте < div >, который превращается в < textarea >, если на него кликнуть.

< textarea > позволяет редактировать HTML в элементе < div >.

Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>. */

const container = document.querySelector('.container')

const endTyping = (elem)=>{
    container.style.display = 'block'
    container.innerHTML = elem.value
    elem.remove()
}

container.addEventListener('click',(event)=>{
    const text = document.createElement('textarea')
    text.style.width='200px'
    text.style.height='200px'
    text.value = container.innerHTML
    container.style.display='none'
    document.body.insertAdjacentElement("afterbegin",text)
    text.focus()
    text.addEventListener('blur',()=>{endTyping(text)})
    text.addEventListener('keypress', (event)=>{
        if(event.key == 'Enter'){
            text.blur()
        }
    })
})


/* Сделайте ячейки таблицы редактируемыми по клику.

По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML.Изменение размера ячейки должно быть отключено.
Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают / отменяют редактирование.
Только одну ячейку можно редактировать за один раз.Пока < td > в «режиме редактирования», клики по другим ячейкам игнорируются.
Таблица может иметь множество ячеек.Используйте делегирование событий. */


let basePadding = 0;

Array.from(document.getElementById('bagua-table').getElementsByTagName('td')).forEach((element)=>{
    element.addEventListener('click',(event)=>{
        if(event.currentTarget === event.target)
        {basePadding = event.target.style.padding;
        event.target.style.padding = '0'

        let oldValue = event.target.innerHTML

        const textArea = generateTextAria(element, event)
        let [buttonOk, buttonCancel] = generateButtons()

        event.target.insertAdjacentElement('afterbegin', textArea)
        textArea.insertAdjacentElement('afterend', buttonCancel)
        textArea.insertAdjacentElement('afterend', buttonOk)

        buttonOk.addEventListener('click', () => { exitEdit(event.target, textArea, true) })
        buttonCancel.addEventListener('click', () => { exitEdit(event.target, textArea, false, oldValue) })
    }

    })
})

function generateTextAria(element, event) {
    const textArea = document.createElement('textarea')
    textArea.value = element.innerHTML
    textArea.style.width = event.target.getBoundingClientRect().width + 'px'
    textArea.style.height = event.target.getBoundingClientRect().height + 'px'
    textArea.style.display ='block'
    element.innerHTML = ''
    return textArea
}

function generateButtons() {
    const buttonOk = document.createElement('button')
    const buttonCancel = document.createElement('button')
    buttonOk.className = 'ok'
    buttonCancel.className = 'cancel'
    buttonOk.innerHTML = 'Ok'
    buttonCancel.innerHTML = 'Cancel'
    return [buttonOk, buttonCancel]
}


function exitEdit(cellLink, textAriaLink, save, oldValueHTML){
    cellLink.innerHTML = save ? textAriaLink.value : oldValueHTML
    cellLink.style.padding = basePadding
    textAriaLink.remove()
}

/* Установите фокус на мышь.Затем используйте клавиши со стрелками, чтобы её двигать:

P.S.Не добавляйте обработчики никуда, кроме элемента #mouse.

P.P.S.Не изменяйте HTML / CSS, подход должен быть общим и работать с любым элементом. */

const mouseElement = document.getElementById('mouse')

mouseElement.setAttribute('tabindex', -1)

mouseElement.addEventListener('focus',(event)=>{
    mouseElement.style.display = 'inline-block'
    mouseElement.style.position= 'relative'
    setStyle(mouseElement.style)
})

mouseElement.addEventListener('keydown', (event)=>{
    switch (event.key) {
        case 'ArrowLeft':
            mouseElement.style.left = parseInt(mouseElement.style.left) - 15 + 'px' ;
            return false;
        case 'ArrowUp':
            mouseElement.style.top = parseInt(mouseElement.style.top) - 15 + 'px' ;
            return false;
        case 'ArrowRight':
            mouseElement.style.left = parseInt(mouseElement.style.left) + 15 + 'px' ;
            return false;
        case 'ArrowDown':
            mouseElement.style.top = parseInt(mouseElement.style.top) + 15 + 'px' ;
            return false;
    }
})

function setStyle(style){
    style.left = style.left === '' ? '0px': style.left
    style.top = style.top === '' ? '0px': style.top
}

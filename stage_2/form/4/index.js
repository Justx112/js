/* Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением(html), полем ввода и кнопками OK / ОТМЕНА.

Пользователь должен ввести что - то в текстовое поле и нажать Enter или кнопку «OK», после чего должна вызываться функция callback(value) со значением поля.
Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).
В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.

    Требования:

Форма должна быть в центре окна.
Форма является модальным окном, это значит, что никакое взаимодействие с остальной частью страницы невозможно, пока пользователь не закроет его.
При показе формы, фокус должен находиться сразу внутри < input >.
Клавиши Tab / Shift + Tab должны переключать фокус между полями формы, не позволяя ему переходить к другим элементам страницы. */


const startButton = document.querySelector('.form_start')
const form = document.getElementById('prompt-form')
const formContainer = document.getElementById('prompt-form-container')

formContainer.style.display = 'none'

function showPrompt(html, callback){
    document.getElementById('prompt-message').innerHTML = html
    form.addEventListener('submit', () => { 
        callback(form.text.value)
        formContainer.style.display = 'none'
    })
    form.cancel.addEventListener('click', () => { 
        callback(null) 
        formContainer.style.display = 'none'
    })
}

startButton.addEventListener('click', () => { 
    formContainer.style.display = 'flex'
    showPrompt('Попробуй что-нибудь...<br>умное?', (value) => { alert(value)}) 
})
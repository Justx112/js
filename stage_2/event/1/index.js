/* Добавьте JavaScript к кнопке button, чтобы при нажатии элемент < div id = "text" > исчезал. */

// document.getElementById('hider').addEventListener('click', ()=>{
//     document.getElementById('text').style.display='none'
// })

/* Создайте кнопку, которая будет скрывать себя по нажатию. */

// document.getElementsByTagName('button')?.addEventListener('click', ()=>{
//     event.currentTarget.style.display='none'
// })

/* В переменной button находится кнопка.Изначально на ней нет обработчиков.

Который из обработчиков запустится ? Что будет выведено при клике после выполнения кода ?

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2); 

Ответ: выведеться 1 потом 2

*/

/* Пусть мяч перемещается при клике на поле, туда, куда был клик

Требования:

Центр мяча должен совпадать с местом нажатия мыши(если это возможно без пересечения краёв поля);
CSS - анимация желательна, но не обязательна;
Мяч ни в коем случае не должен пересекать границы поля;
При прокрутке страницы ничего не должно ломаться; */

const ball = document.getElementById('ball')
ball.style.position = 'absolute'
const field = document.getElementById('field')

const borderWidth = field.clientTop
const fieldParams = field.getBoundingClientRect()
const centerBall = {
    x: Math.ceil(ball.getBoundingClientRect().width / 2),
    y: Math.ceil(ball.getBoundingClientRect().height / 2)
}

field.addEventListener('click', (e) => {
    let y = e.clientY < fieldParams.top + borderWidth + centerBall.y ? fieldParams.top + borderWidth + centerBall.y : e.clientY
    y = e.clientY > fieldParams.bottom - borderWidth - centerBall.y ? fieldParams.bottom - borderWidth - centerBall.y : y

    let x = e.clientX < fieldParams.left + borderWidth + centerBall.x ? fieldParams.left + borderWidth + centerBall.x : e.clientX
    x = e.clientX > fieldParams.right - borderWidth - centerBall.x ? fieldParams.right - borderWidth - centerBall.x : x
    ball.style.top = y - centerBall.y + 'px'
    ball.style.left = x - centerBall.y + 'px'
})

/* Создать меню, которое по нажатию открывается либо закрывается */

const switchEleements = [document.querySelector('.list'),
document.querySelector('.show_arrow'),
document.querySelector('.hide_arrow')]

document.querySelector('.text').addEventListener('click', (e) => {
    switchEleements.forEach(e => e.classList.toggle('hide'))
})



/* 
Есть список сообщений.
При помощи JavaScript для каждого сообщения добавьте
в верхний правый угол кнопку закрытия. */

document.querySelectorAll('.pane')
    .forEach(elem => { 
        elem.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>') 
        elem.addEventListener('click', (e)=>{
            if (e.target.classList.contains('remove-button')) {
                elem.remove()}
        })})
const button = document.querySelectorAll('.remove-button').forEach(elem => {
    elem.style.position = 'absolute'
    elem.style.top = '5px'
    elem.style.right = '5px'
    elem.innerText = '[x]'
})



Array.from(document.getElementsByTagName('li')).forEach((element)=>{
    element.style.position = 'relative';
    element.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0"></span>`)});


let width = 130; 
let count = 3; 

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0;

document.querySelector('.prev').addEventListener('click', ()=>{
    position += 390;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
})

document.querySelector('.next').addEventListener('click',()=>{
    position -= 390;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
})

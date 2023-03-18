
function showNotification(top = 10, right = 10, html, className){
    const elem = document.createElement('div')
    elem.classList.add(className)
    elem.classList.add('notification')
    elem.innerHTML = html
    elem.style.top = top + 'px'
    elem.style.right = right + 'px'
    document.body.insertAdjacentElement('afterbegin', elem)
    setTimeout(()=> elem.remove(), 1500)
}
rshowNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
});
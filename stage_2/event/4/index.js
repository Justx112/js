/* Почему в коде ниже return false не работает ? 
Браузер переходит по указанной ссылке, но нам этого не нужно.
Как поправить?

{ <script>
  function handler() {
    alert( "..." );
    return false;
  }
</script>

<a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a> }*/

// Ответ: функция возвращает false, но событие не возвращает false. onclick="return handler()"

/* Сделайте так, чтобы при клике на ссылки внутри элемента id = "contents" пользователю выводился вопрос о том,
действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке. 
Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все ссылки и поставить на них обработчики нельзя.
Используйте делегирование.
Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.
*/
document.getElementById('contents').addEventListener('click',(event)=>{
    if(event.target.closest('a')){
        if (confirm(`Вы действительно хотите перейти по ссылки${event.target.closest('a').getAttribute('href')}`)){}
        else{event.preventDefault()}
    }
})


/* Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант. */

const largeIMG = document.getElementById('largeImg')

document.getElementById('thumbs').addEventListener('click',(event)=>{
  if(event.target.hasAttribute('src')){
    event.preventDefault()
    largeIMG.setAttribute('src', event.target.closest('a').href)
  }
})



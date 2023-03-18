/* Что выведет этот код ?
<html>
    <body>
        <script>
            alert(document.body.lastChild.nodeType);
        </script>
    </body>
</html>
Ответ: 1 */

/* Что выведет этот код ?
<script>
    let body = document.body;
    body.innerHTML = "<!--" + body.tagName + "-->";
    alert( body.firstChild.data ); // что выведет?
</script> 
Ответ: body*/

/* Объектом какого класса является document ?
Какое место он занимает в DOM - иерархии ?
Наследует ли он от Node или от Element, или может от HTMLElement ? 
Ответ: htmldocument, 3(event=>node=>document), наследуется от Node*/
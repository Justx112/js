/* Напишите if..else, соответствующий следующему switch:

switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;

    default:
        alert('We hope that this page looks ok!');
} */


let borowser = 'Firefox'

if (borowser === 'Edge') {
    alert("You've got the Edge!");
} else if (borowser === 'Chrome' ||
    borowser === 'Firefox' ||
    borowser === 'Safari' ||
    borowser === 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

/* Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
    alert('Вы ввели число 0');
}

if (number === 1) {
    alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
    alert('Вы ввели число 2, а может и 3');
} */


const number = +prompt('Введите число между 0 и 3', '');

switch(number) {
    case 0:
        alert('Вы ввели 0')
        break
    case 1:
        alert('Вы ввели ')
        break
    case 2:
    case 3:
        alert('Вы ввели 2 или 3')
        break
}
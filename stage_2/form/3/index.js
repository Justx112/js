/* Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент, а затем рассчитать, какая это будет сумма через заданный промежуток времени. */


const inputData = document.forms.calculator
const resultColumn = document.getElementById('height-after')

inputData.money.addEventListener('change', setResult)
inputData.interest.addEventListener('change', setResult)
inputData.months.addEventListener('change', setResult)

function setResult(){
    let result = Math.round(inputData.money.value * (1 + (inputData.interest.value / 100)) ** (inputData.months.value /12));
    let height = (result / inputData.money.value) * 100
    resultColumn.style.height = height+'px'
    document.getElementById('height-after').style.height = height;
    document.getElementById('money-before').innerHTML = inputData.money.value;
    document.getElementById('money-after').innerHTML = result;
}

setResult()
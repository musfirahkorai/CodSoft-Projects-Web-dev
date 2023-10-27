let result = document.getElementById('result');

function clearResult() {
    result.innerText = '0';
}

function appendToResult(value) {
    if (result.innerText === '0') {
        result.innerText = value;
    } else {
        result.innerText += value;
    }
}

function calculateResult() {
    try {
        result.innerText = eval(result.innerText);
    } catch (error) {
        result.innerText = 'Error';
    }
}

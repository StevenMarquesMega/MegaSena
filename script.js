function analyzeNumbers() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    // Limpa o resultado anterior
    resultDiv.innerHTML = '';

    if (!numberInput) {
        resultDiv.innerHTML = 'Por favor, insira a sequência de números.';
        return;
    }

    // Processa a entrada para lidar com vírgulas ou espaços
    const numbers = numberInput.split(/[\s,]+/).map(num => parseInt(num.trim())).filter(num => !isNaN(num));

    if (numbers.length === 0) {
        resultDiv.innerHTML = 'Por favor, insira uma sequência válida de números.';
        return;
    }

    const numberMap = new Map();

    for (let number of numbers) {
        if (numberMap.has(number)) {
            numberMap.set(number, numberMap.get(number) + 1);
        } else {
            numberMap.set(number, 1);
        }
    }

    const sortedNumbers = [...numberMap.entries()].sort((a, b) => a[0] - b[0]);

    if (sortedNumbers.length > 0) {
        resultDiv.innerHTML = 'Números em ordem crescente e suas repetições:<br>';
        sortedNumbers.forEach(([number, count]) => {
            resultDiv.innerHTML += `Número ${number} se repete ${count} vezes.<br>`;
        });
    } else {
        resultDiv.innerHTML = 'Nenhum número se repete na sequência fornecida.';
    }
}

function clearInputs() {
    document.getElementById('numberInput').value = '';
    document.getElementById('result').innerHTML = '';
}

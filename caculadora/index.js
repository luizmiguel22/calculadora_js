function calcular() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operacao = document.getElementById('ope').value;
    var resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case 'x':
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operação inválida. Use '+', '-', 'x' ou '/'.");
            return;
    }

    document.getElementById('res').textContent = resultado;
}

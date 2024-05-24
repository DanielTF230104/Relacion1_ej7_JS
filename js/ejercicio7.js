function calcularDivisionEuclides() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1) || num1 <= 0 || isNaN(num2) || num2 <= 0) {
        alert('Por favor, ingrese números enteros positivos válidos.');
        return;
    }

    let a = num1;
    let b = num2;
    let cociente = 0;

    while (a >= b) {
        a -= b;
        cociente++;
    }

    const resto = a;

    document.getElementById('resultado').textContent = `Cociente: ${cociente}, Resto: ${resto}`;
}
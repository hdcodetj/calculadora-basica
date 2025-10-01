const calcular = (operacao) => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    let resultado;

    if (operacao === "+") {
        resultado = num1 + num2;
    } else if (operacao === "-") {
        resultado = num1 - num2;
    } else if (operacao === "*") {
        resultado = num1 * num2;
    } else if (operacao === "/") {
        resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero!";
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
};

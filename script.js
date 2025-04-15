function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");

    if(isNaN(peso) || isNaN(altura)){
        resultado.textContent = "Preencha todos os campos!";
        return;
}
        const imc = peso / (altura * altura);
        let classificacao = "";

        if(imc < 18.5){
            classificacao = "Abaixo do peso";
        } else if(imc < 25){
            classificacao = "Peso ideal";
        } else if(imc < 30){
             classificacao = "Sobrepeso";
        } else {
                classificacao = "Obesidade";
        }
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
        }
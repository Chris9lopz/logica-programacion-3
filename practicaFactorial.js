/* Crear un programa en Javascript que realice lo siguiente:
- Debe solicitar al usuario un número por prompt o por input y guardarlo.
- Debe calcular el factorial del número recibido.
- Debe imprimir el resultado por consola o por el DOM.
- Debe ser capaz de identificar si el dato de entrada es de tipo number, 
en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.*/ 

function factorial(numero) {
    if (numero < 0) return "No se puede calcular el factorial de un número negativo";
    if (numero === 0) return 1;

    let total = 1;

    for (let i = 1; i<=numero; i++){
        total*=i
    } 

    return total
}

document.getElementById("btn-enviar").addEventListener("click", function(e){
    e.preventDefault();
    let numero = parseInt(document.getElementById("numero").value, 10);
    let resultado = factorial(numero);
    console.log(resultado);
    let texto = document.createElement("h3");
    texto.textContent = "El factorial de " + numero + " es igual a " + resultado;
    document.getElementById("formulario").appendChild(texto);
});

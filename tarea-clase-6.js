/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $BOTON_CANTIDAD_INTEGRANTES = document.querySelector("#ingresar-integrantes");
const $BOTON_CALCULAR_EDAD = document.querySelector("#calcular-edad");
const $BOTON_REINICIAR_EDAD = document.querySelector("#reiniciar-edad");

$BOTON_CANTIDAD_INTEGRANTES.onclick = function () {

    cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;

    if (cantidadIntegrantes == 0) {
        return alert("Ingresá un valor mayor a 0");
    }

    for (i = 0; i < cantidadIntegrantes; i++) {
        imprimirCantidadIntegrantes(i);
    }

    mostrarBotonCalcularEdad();

    return false;
}

function imprimirCantidadIntegrantes(cantidadIntegrantes) {

    const $divIntegrante = document.createElement("div");
    $divIntegrante.className = "integrante";

    const $labelEdad = document.createElement("label");
    $labelEdad.textContent = `Edad del integrante #${cantidadIntegrantes + 1} `;

    const $inputEdad = document.createElement("input");
    $inputEdad.type = "number";
    $inputEdad.classList = "edad";

    $divIntegrante.appendChild($labelEdad);
    $divIntegrante.appendChild($inputEdad);

    const $divIntegrantes = document.querySelector("#integrantes")
    $divIntegrantes.appendChild($divIntegrante);


}

function mostrarBotonCalcularEdad() {
    document.querySelector("#calculo-edad").className = "";

}

$BOTON_CALCULAR_EDAD.onclick = function () {

    const edadIntegrantes = document.querySelectorAll(".edad");

    mostrarMensajeMayorEdad(calcularMayorEdad(edadIntegrantes));
    mostrarMensajeMenorEdad(calcularMenorEdad(edadIntegrantes));
    mostrarMensajeEdadPromedio(calcularPromedio(edadIntegrantes));

    mostrarBotonIngresarSalario();

    return false;
}

function mostrarMensajeMayorEdad(calcularMayorEdad) {
    const mayorEdad = document.createElement("p");
    document.querySelector("#integrantes").appendChild(mayorEdad);
    mayorEdad.textContent = `La mayor edad es de ${calcularMayorEdad} años.`

}

function mostrarMensajeMenorEdad(calcularMenorEdad) {
    const menorEdad = document.createElement("p");
    document.querySelector("#integrantes").appendChild(menorEdad);
    menorEdad.textContent = `La menor edad es de ${calcularMenorEdad} años.`

}

function mostrarMensajeEdadPromedio(calcularPromedio) {
    const edadPromedio = document.createElement("p");
    document.querySelector("#integrantes").appendChild(edadPromedio);
    edadPromedio.textContent = `La edad promedio es de ${calcularPromedio} años.`

}

function mostrarBotonIngresarSalario() {

    document.querySelector("#ingreso-salarios").className = "";
    ocultarCalculoEdad();

}

$BOTON_REINICIAR_EDAD.onclick = function () {
    reiniciarEdad()
    ocultarCalculoEdad();
    return false;
}

function reiniciarEdad() {

    const integrantes = document.querySelectorAll(".integrante");

    for (i = 0; i < integrantes.length; i++) {
        const integrante = document.querySelector(".integrante");
        integrante.remove();
    }

    const mensajes = document.querySelectorAll("p");
    for (i = 0; i < mensajes.length; i++) {
        const mensaje = document.querySelector("p");
        mensaje.remove();
    }

    document.querySelector("#cantidad-integrantes").value = "";
}

function ocultarCalculoEdad() {
    document.querySelector("#calculo-edad").className = "oculto";


}

function ocultarBotonIngresarSalario() {
    document.querySelector("#ingreso-salarios").className = "oculto";
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

////////////////////////////////////////////////////////////////

const $BOTON_INGRESAR_SALARIO = document.querySelector("#ingresar-salario");
const $BOTON_CALCULAR_SALARIO = document.querySelector("#calcular-salarios");
const $BOTON_REINICIAR_SALARIOS = document.querySelector("#reiniciar-salarios");

$BOTON_INGRESAR_SALARIO.onclick = function () {
    ocultarBotonIngresarSalario()

    const cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;

    for (i = 1; i <= cantidadIntegrantes; i++) {
        imprimirCantidadSalarioIngresar(i);
    }

    mostrarBotonCalularSalario();
    mostrarBotonReiniciarSalario();

    return false

}

function imprimirCantidadSalarioIngresar() {

    const $divSalarios = document.querySelector("#salarios");

    const $divSalarioIntegrante = document.createElement("div");
    $divSalarioIntegrante.classList = "salario";

    const $ingresarSalarioLabel = document.createElement("label");
    $ingresarSalarioLabel.textContent = `Salario anual integrante #${i}`;

    const $ingresarSalarioInput = document.createElement("input");
    $ingresarSalarioInput.type = "number";
    $ingresarSalarioInput.setAttribute("id", "salario-integrante");


    $divSalarios.appendChild($divSalarioIntegrante);
    $divSalarioIntegrante.appendChild($ingresarSalarioLabel);
    $divSalarioIntegrante.appendChild($ingresarSalarioInput);

}

function mostrarBotonCalularSalario() {
    $BOTON_CALCULAR_SALARIO.className = "";
}

function mostrarBotonReiniciarSalario() {
    $BOTON_REINICIAR_SALARIOS.className = "";

}


$BOTON_CALCULAR_SALARIO.onclick = function () {
    const salarios = document.querySelectorAll("#salario-integrante");

    const salarioIntegrantes = [];

    for (i = 0; i < salarios.length; i++) {
        if (Number(salarios[i].value) == "" || 0) {
            continue;
        }

        salarioIntegrantes.push(Number(salarios[i].value));
    }

    if (salarioIntegrantes == false) {
        alert("No has ingresado los salarios anuales correctamente.");
        return false;
    }
    mostrarMensajeMayorSalarioAnual(calcularMayorSalarioAnual(salarioIntegrantes));
    mostrarMensajeMenorSalarioAnual(calcularMenorSalarioAnual(salarioIntegrantes));
    mostrarMensajeSalarioMensualPromedio(calcularSalarioMensualPromedio(salarioIntegrantes));
    mostrarMensajeSalarioAnualPromedio(calcularSalarioAnualPromedio(salarioIntegrantes));

    return false;
}

$BOTON_REINICIAR_SALARIOS.onclick = function () {

    reiniciarSalarios();
    reiniciarEdad();
    $BOTON_REINICIAR_SALARIOS.className = "oculto";
    $BOTON_CANTIDAD_INTEGRANTES.className = "";
    return false;
}

function reiniciarSalarios() {

    const $salarios = document.querySelectorAll(".salario");

    for (i = 0; i < $salarios.length; i++) {
        const salario = document.querySelector(".salario");
        salario.remove();
    }

    ocultarCalculoSalario();

}

function mostrarMensajeMayorSalarioAnual(calcularMayorSalarioAnual) {
    const mayorSalarioAnual = document.createElement("p");
    document.querySelector("#salarios").appendChild(mayorSalarioAnual);
    mayorSalarioAnual.textContent = `El mayor salario anual es de $${calcularMayorSalarioAnual}.`

}

function mostrarMensajeMenorSalarioAnual(calcularMenorSalarioAnual) {
    const menorSalarioAnual = document.createElement("p");
    document.querySelector("#salarios").appendChild(menorSalarioAnual);
    menorSalarioAnual.textContent = `El menor salario anual es de $${calcularMenorSalarioAnual}.`
}

function mostrarMensajeSalarioMensualPromedio(calcularSalarioMensualPromedio) {
    const salarioMensualPromedio = document.createElement("p");
    document.querySelector("#salarios").appendChild(salarioMensualPromedio);
    salarioMensualPromedio.textContent = `El salario mensual promedio es de $${calcularSalarioMensualPromedio}.`
}
function mostrarMensajeSalarioAnualPromedio(calcularSalarioAnualPromedio) {

    const salarioAnualPromedio = document.createElement("p");
    document.querySelector("#salarios").appendChild(salarioAnualPromedio);
    salarioAnualPromedio.textContent = `El salario anual promedio es de $${calcularSalarioAnualPromedio}.`
}

function ocultarCalculoSalario() {

    $BOTON_CALCULAR_SALARIO.className = "oculto";
    $BOTON_REINICIAR_SALARIOS.className = "oculto";

}

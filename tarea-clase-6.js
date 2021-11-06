/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $BOTON_CANTIDAD_INTEGRANTES = document.querySelector("#ingresar-integrantes");
const $BOTON_CALCULAR = document.querySelector("#calcular");
const $BOTON_REINICIAR_CAMPOS = document.querySelector("#reiniciar");

$BOTON_CANTIDAD_INTEGRANTES.onclick = function () {

    cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;

    if (cantidadIntegrantes == 0) {
        return alert("Ingresá un valor mayor a 0");
    }

    for (i = 0; i < cantidadIntegrantes; i++) {
        imprimirCantidadIntegrantes(i);
    }

    mostrarBotonCalcular();
    mostrarBotonReiniciarCampos();

    return false;
}

function imprimirCantidadIntegrantes(cantidadIntegrantes) {

    const $div = document.createElement("div");
    $div.className = "integrante";

    const $label = document.createElement("label");
    $label.textContent = `Nombre y edad del integrante #${cantidadIntegrantes + 1} `;


    const $inputNombre = document.createElement("input");
    $inputNombre.type = "text";
    $inputNombre.classList ="nombre";

    const $inputEdad = document.createElement("input");
    $inputEdad.type = "number";
    $inputEdad.classList = "edad";

    $div.appendChild($label);
    $div.appendChild($inputNombre);
    $div.appendChild($inputEdad);

    const $divIntegrantes = document.querySelector("#integrantes")
    $divIntegrantes.appendChild($div);


}

function mostrarBotonCalcular(){
    $BOTON_CALCULAR.className = "";
   
}

function mostrarBotonReiniciarCampos(){
    $BOTON_REINICIAR_CAMPOS.className = "";

}

$BOTON_CALCULAR.onclick = function(){

    //const nombreIntegrantes = document.querySelectorAll(".nombre");

    const edadIntegrantes = document.querySelectorAll(".edad");

   mostrarMensajeMayorEdad(calcularMayorEdad(edadIntegrantes));
   mostrarMensajeMenorEdad(calcularMenorEdad(edadIntegrantes));
   mostrarMensajePromedio(calcularPromedio(edadIntegrantes));

 return false;
}

$BOTON_REINICIAR_CAMPOS.onclick = function(){
    
    const integrantes = document.querySelectorAll(".integrante");

    for (i = 0; i < integrantes.length; i++){
        integrante = document.querySelector(".integrante");
        integrante.remove();
    }


    return false;
}

function mostrarMensajeMayorEdad(calcularMayorEdad){
   const mayorEdad = document.createElement("p");
   document.querySelector("#integrantes").appendChild(mayorEdad);
    mayorEdad.textContent = `La mayor edad es de ${calcularMayorEdad} años.`

}

function mostrarMensajeMenorEdad(calcularMenorEdad){
    const menorEdad = document.createElement("p");
    document.querySelector("#integrantes").appendChild(menorEdad);
    menorEdad.textContent = `La menor edad es de ${calcularMenorEdad} años.`

}

function mostrarMensajePromedio(calcularPromedio){
    const edadPromedio = document.createElement("p");
    document.querySelector("#integrantes").appendChild(edadPromedio);
    edadPromedio.textContent = `La edad promedio es de ${calcularPromedio} años.`

}



/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

////////////////////////////////////////////////////////////////
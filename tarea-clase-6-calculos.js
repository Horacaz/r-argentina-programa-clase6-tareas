function calcularMayorEdad(edadIntegrantes) {
    let mayorIntegrante = Number(edadIntegrantes[0].value)

    for (i = 0; i < edadIntegrantes.length; i++) {
        if (mayorIntegrante < Number(edadIntegrantes[i].value)) {
            mayorIntegrante = Number(edadIntegrantes[i].value)
        }

    }

    return mayorIntegrante;

}

function calcularMenorEdad(edadIntegrantes) {
    let menorIntegrante = Number(edadIntegrantes[0].value)

    for (i = 0; i < edadIntegrantes.length; i++) {
        if (menorIntegrante > Number(edadIntegrantes[i].value)){
            menorIntegrante = Number(edadIntegrantes[i].value)

        }

    }
    return menorIntegrante;


}

function calcularPromedio(edadIntegrantes) {

    let totalEdades = 0
    for (i = 0; i < edadIntegrantes.length; i++) {
        totalEdades += Number(edadIntegrantes[i].value);
    }
    return (totalEdades / edadIntegrantes.length).toFixed();
}

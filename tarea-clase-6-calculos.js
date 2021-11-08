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
        if (menorIntegrante > Number(edadIntegrantes[i].value)) {
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

function calcularMayorSalarioAnual(salarioAnual) {
    mayorSalarioAnual = 0;

    for (i = 0; i < salarioAnual.length; i++) {
        if (mayorSalarioAnual < Number(salarioAnual[i])){
            mayorSalarioAnual = Number(salarioAnual[i])
        }
    }
    return mayorSalarioAnual;
}

function calcularMenorSalarioAnual(salarioAnual) {
    menorSalarioAnual = Number(salarioAnual[0]);

    for (i = 0; i < salarioAnual.length; i++) {
        if (menorSalarioAnual > Number(salarioAnual[i])){
            menorSalarioAnual = Number(salarioAnual[i])
        }
    }
    return menorSalarioAnual
}

function calcularSalarioMensualPromedio(salarioAnual) {
    salarioMensualPromedio = 0;

    for (i = 0; i < salarioAnual.length; i++) {
        salarioMensualPromedio += Number(salarioAnual[i]);
    }
    return (salarioMensualPromedio / 12).toFixed(2)
}

function calcularSalarioAnualPromedio(salarioAnual) {
    salarioAnualPromedio = 0;
    for (i = 0; i < salarioAnual.length; i++) {
        salarioAnualPromedio += Number(salarioAnual[i]);
    }
    return (salarioAnualPromedio / salarioAnual.length).toFixed(2)
}

// Función para calcular el área de la circunferencia
function calcularArea(radio) {
    return Math.PI * Math.pow(radio, 2);
}

// Función para calcular el perímetro de la circunferencia
function calcularPerimetro(radio) {
    return 2 * Math.PI * radio;
}

// Función para calcular el diámetro de la circunferencia
function calcularDiametro(radio) {
    return 2 * radio;
}

// Función para calcular la longitud de arco
function calcularLongitudArco(radio, angulo) {
    return (angulo * Math.PI * radio) / 180;
}

// Función para mostrar el resultado en consola y alert
function mostrarResultado(mensaje) {
    console.log(mensaje);
    alert(mensaje);
}

// Solicitar al usuario un valor de radio de circunferencia
let radio = parseFloat(prompt("Ingrese el valor del radio de la circunferencia:"));

// Mostrar al usuario un menú de valores que se pueden obtener con ese radio
let opcion = prompt("Seleccione una opción:\n1. Área\n2. Perímetro\n3. Diámetro\n4. Longitud de arco");

// Realizar la operación correspondiente y mostrar el resultado
switch (opcion) {
    case "1":
        let area = calcularArea(radio);
        mostrarResultado("El área de la circunferencia es: " + area);
        break;
    case "2":
        let perimetro = calcularPerimetro(radio);
        mostrarResultado("El perímetro de la circunferencia es: " + perimetro);
        break;
    case "3":
        let diametro = calcularDiametro(radio);
        mostrarResultado("El diámetro de la circunferencia es: " + diametro);
        break;
    case "4":
        let angulo = parseFloat(prompt("Ingrese el valor del ángulo en grados:"));
        let longitudArco = calcularLongitudArco(radio, angulo);
        mostrarResultado("La longitud del arco es: " + longitudArco);
        break;
    default:
        mostrarResultado("Opción no válida");
}

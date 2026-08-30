const prompt = require('prompt-sync')();

let nombre = prompt("Ingrese su nombre: ");
let nombrePuesto = prompt("Ingrese el nombre del puesto: ");
let primerAdjetivo = prompt("Ingrese el primer adjetivo: ");                    
let segundoAdjetivo = prompt("Ingrese el segundo adjetivo: ");
let primerAlimento = prompt("Ingrese el primer alimento: ");
let segundoAlimento = prompt("Ingrese el segundo alimento: ");
let emocion = prompt("Ingrese una emoción: ");

console.log(`${nombre} comenzó hoy su primer curso de Generation. Se está formando para el puesto de ${nombrePuesto}. Su grupo le pareció muy ${primerAdjetivo}, pero su instructor fue, al menos, ${segundoAdjetivo}. Para el almuerzo come ${primerAlimento} y ${segundoAlimento} mientras repasa sus apuntes. Se siente ${emocion}, pero está decidido a completar el curso.`);

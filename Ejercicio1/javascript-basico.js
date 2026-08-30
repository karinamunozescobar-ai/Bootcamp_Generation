//1. Crea dos variables: una con tu nombre y otra con tu apellido. 
let name = "Karina";
let lastName = "Muñoz";

//Imprime ambos juntos en un solo console.log()
console.log(name +" "+ lastName);
//2. Crea una variable con un número. Súmale 5, luego multiplícalo por 3 e imprime el resultado.
let number = 10;
number += 5;
number *= 3;
console.log(number);

//3. Crea una variable con tu comida favorita e imprímela en consola.
let favoriteFood = "Pizza";
console.log(favoriteFood);  

//4. Crea dos variables `a = 10` y `b = 3`
let a = 10;
let b = 3;
    // Imprime:
    
    //- La suma
    console.log(a + b);
    //- La resta
    console.log(a - b);         
    //- La multiplicación
    console.log(a * b);
    //- El resultado del módulo (`%`)
    console.log(a % b);
    //- Ahora cambia los valores por tipo de datos strings y luego string y number ¿Qué sucede en cada uno?
    x = "10";
    y = "3";
    console.log(x + y); 
    //el resultado es "103" porque al ser strings, se concatenan en lugar de sumarse.
     console.log(x - y);         
    //el resultado es 7 porque al restar strings que representan números, JavaScript los convierte a números automáticamente.
    console.log(x * y);
    //el resultado es 30 porque al multiplicar strings que representan números, JavaScript los convierte a números automáticamente.
    console.log(x % y);
    // el resultado es 1 porque al calcular el módulo de strings que representan números, JavaScript los convierte a números automáticamente.

//5. Crea una variable `edad = 15`
    let edad = 15;
    //Imprime si:
    
    //- es mayor a 10
    console.log(edad >10);
    //- es menor a 18
    console.log(edad <18);
//6. Crea una variable `numero = 8`
    let numero = 8;
    //Imprime si:
    
    //- es mayor que 5 Y menor que 10
    console.log(numero > 5 && numero < 10);
//7. Crea una variable `nota = 6`
    let nota = 6;
    //Imprime si:
    
    //- es igual a 7
    console.log(nota === 7);
//8. Crea una variable `temperatura = 25` 
    let temperatura = 25;
    //Imprime si:

//- es mayor o igual a 30
    console.log(temperatura >= 30);
//9. Crea dos números
    let num1 = 10;
    let num2 = 20;
    //Imprime:
    
    //- si son iguales
    console.log(num1 === num2);
    //- si uno es mayor que el otro
    console.log(num1 > num2 || num1 < num2);

//10. Crea:

let Edad = 17;
let tienePermiso = true;

//Imprime:

//- puede conducir (edad >= 18 O tienePermiso) 
console.log(Edad >= 18 || tienePermiso);

//11. Crea:

let usuario="admin";
let password="1234";

//Imprime:

//- usuario es "admin" Y password es "1234"
console.log('Usuario es ' + usuario + ' y Password es ' + password);

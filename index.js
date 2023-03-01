// Iteration 1: Names and Input
let driver = "Manolo";
console.log(`The driver's name is ${driver}`);

let navigator = "Pedro";
console.log(`The navigator's name is ${navigator}`);

// Iteration 2: Conditionals
if (driver.length > navigator.length) {
   console.log(`The driver has the longest name, it has ${driver.length} characters.o`);

} else if (driver.length < navigator.length) {
   console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.o`);

} else {
   console.log(`Wow, you both have equally long names, ${driver.length} characters!`);
}


// Iteration 3: Loops
const nombreEnMayusculas = driver.toUpperCase();
let palabraFormatoImprenta = "";
console.log("Nombre -> " + nombreEnMayusculas);
for (let contador = 0; contador < nombreEnMayusculas.length; contador++) {
   console.log("Dentro del bucle contador ->" + contador);
   palabraFormatoImprenta = palabraFormatoImprenta + nombreEnMayusculas[contador] + " ";
   console.log("Formato palabra de impreta ->" + palabraFormatoImprenta);
}

console.log("Respuesta iteracion 3: " + palabraFormatoImprenta);

let ordenInverso = "";

for (let contador = 0; contador < navigator.length; contador++) {

   ordenInverso = navigator[contador] + ordenInverso;
}

console.log("Respuest iteracion -> " + ordenInverso);

let letrasDiccionario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let primerNombre = false;
let segundoNombre = false;

for (let contador = 0; contador < driver.length; contador++) {
   if (letrasDiccionario.indexOf(driver[contador]) > letrasDiccionario.indexOf(navigator[contador])) {
      segundoNombre = true;
      break;
   } else if (letrasDiccionario.indexOf(navigator[contador]) > letrasDiccionario.indexOf(driver[contador])) {
      primerNombre = true;
      break;
   }
}

if (primerNombre) {
   console.log("The driver's name goes first.");
} else if (segundoNombre) {
   console.log("Yo, the navigator goes first definitely.");
} else { 
   console.log("What?! You both have the same name?")
}

/*/1. Hacer un programa que me capture por teclado el numero 86 y un mensaje que diga “Tutela artículo
86” y el numero 23 me debe mostrar un mensaje que diga “Derecho de petición artículo 23”.*/

function tutela() {

    let entrada = prompt("Ingresa el número 23 0 86:");

    if (entrada.indexOf("86") !== -1) {
        alert("Tutela artículo 86");
    } if (entrada.indexOf("23") !== -1) {
        alert("Derecho de petición artículo 23"); 
    }
}

/*/ 2. En Mega Plaza de Madrid se hace un 25% de descuento a los clientes cuya compra supere los $
70000 ¿Cuál será la cantidad que pagara una persona por su compra? */
function megaPlaza() {

    let montoCompra = parseInt(prompt("Ingrese el monto de su compra:"));

    let descuento, montoPagar, total;
    if (montoCompra > 70000) {
        descuento = montoCompra * 0.25;
        montoPagar = montoCompra - descuento;
    } else {
        descuento = 0;
        montoPagar = montoCompra;
    }

    alert(`Monto a pagar: $${montoCompra.toFixed(2)}\nDescuento aplicado: $${descuento.toFixed(2)}\nTotal a pagar: $${montoPagar.toFixed(2)}`)

}

/*/3. hacer un programa que me capture por teclado el día 10 y me escriba “petición en curso”, el día 15 y
me escriba “solicitud de copias “y el 30 día me escriba “consultas”. si el usuario digita un día distinto
me debe mostrar un mensaje que diga “día no correspondiente al trámite del derecho de petición”.  */
function tramite() {

    let dia = parseInt(prompt("Ingrese un día del mes:"));

    // Verificar el día y mostrar el mensaje correspondiente
    if (dia === 10) {
        alert("Petición en curso");
    } else if (dia === 15) {
        alert("Solicitud de copias");
    } else if (dia === 30) {
        alert("Consultas");
    } else {
        alert("Día no correspondiente al trámite del derecho de petición");
    }
}

/*/4. Diseñar un diagrama de flujo que me evalué que se busca con un derecho de petición. Captura por
teclado un número que se evalúa de la siguiente manera; si digita el numero 1 debe escribir
“reconocimiento a un derecho”, 2 “la intervención de una entidad o funcionario”, 3 “la resolución de una
situación jurídica”, 4 “la prestación de un servicio”, 5 “requerir información “, 6” consultar, examinar y
requerir copias de documento”, 7 “formular consultas, quejas y reclamos” y 8 “interponer reclamos”. Si
digita un numero distinto mostrar un mensaje que diga no se puede evaluar el derecho de petición.*/
function buscarPeticion() {

    let numero = parseInt(prompt("Ingrese un número del 1 al 8 para buscar su derecho a petición"));

    if (numero === 1) {
    alert("Reconocimiento a un derecho");
    } else if (numero === 2) {

    alert("Intervención de una entidad o funcionario");
    } else if (numero === 3) {

    alert("Resolución de una situación jurídica");
    } else if (numero === 4) {

    alert("Prestación de un servicio");
    } else if (numero === 5) {

    alert("Requerir información");
    } else if (numero === 6) {

    alert("Consultar, examinar y requerir copias de documento");
    } else if (numero === 7) {

    alert("Formular consultas, quejas y reclamos");
    } else if (numero === 8) {

    alert("Interponer reclamos");
    } else {

    alert("No se puede evaluar el derecho de petición");
    }
}

/*/ 5. Un aprendiz va a llenar un tanque bajo con agua de 250 litros, primero le suministra 1/5 debe mostrar
el mensaje “50Lt”, 2/5 debe mostrar el mensaje “100Lt”, 3/5 debe mostrar el mensaje “150Lt”, 4/5 debe
mostrar el mensaje “200Lt”, 5/5 debe mostrar el mensaje “250Lt”. Capturar por teclado el numero
racional decimal finito según la fracción.*/
function tanqueAgua() {

    let fraccion = prompt("Ingrese la fracción del tanque lleno (como número o fracción, ej: 1/5)");

    let litros;
    if (fraccion === "1/5" || fraccion === "0.2") {
      litros = 50;
    } else if (fraccion === "2/5" || fraccion === "0.4") {
      litros = 100;
    } else if (fraccion === "3/5" || fraccion === "0.6") {
      litros = 150;
    } else if (fraccion === "4/5" || fraccion === "0.8") {
      litros = 200;
    } else if (fraccion === "5/5" || fraccion === "1") {
      litros = 250;
    } else {
      alert("La fracción ingresada no es válida");
    }
    
    if (litros) {
      alert(litros + " Lt");
    }
    
}

/*/ 6. Un obrero necesita calcular su salario mensual , el cual se obtiene de la siguiente manera:
Si su salario mínimo es menor o igual a $737.717 las horas extras se pagaran a $6.453 y si su
salario es dos salarios mínimos mayor o igual $1.475.434 las horas extras se pagaran a $12.908.
capturar por teclado el salario, las horas extras y mostrar el salario neto a pagar al obrero.*/
function obrero(){
    let salario = parseFloat(prompt("Ingrese el salario mensual del obrero"));
    let horasExtras = parseInt(prompt("Ingrese la cantidad de horas extras trabajadas"));
    
    let valorHoraExtra;
    
    if (salario <= 737717) {
      valorHoraExtra = 6453;
    } else if (salario >= 1475434) {
      valorHoraExtra = 12908;
    } else {
      alert("El salario ingresado no es válido");
    }
    
    let salarioNeto = salario + (horasExtras * valorHoraExtra);
    
    if (salarioNeto) {
      alert("El salario neto a pagar al obrero es de $" + salarioNeto.toFixed(2));
    }
    
}

/*/ 7. Si un empleado recibe un ingreso mensual, pero el empleador le dice que el primer mes le incrementa
30%, el segundo mes 40% y tercer mes 35%. Se debe capturar por teclado el ingreso del empleado y
el mes, postreramente se debe mostrar el valor neto del ingreso mensual del empleado.*/
function empleado() {

  let ingreso = prompt("Ingrese el ingreso mensual del empleado:");
  let mes = prompt("Ingrese el mes (1, 2 o 3):");
  
  switch (mes) {
    case "1":
      ingreso *= 1.3;
      break;
    case "2":
      ingreso *= 1.4;
      break;
    case "3":
      ingreso *= 1.35;
      break;
    default:
      alert("Mes inválido");
  }
  
  if (mes >= 1 && mes <= 3) {
    alert(`El ingreso mensual del empleado para el mes ${mes} es de ${ingreso} $.`);
  }
}

/*/8. Hacer un programa que me capture por teclado la unidad de medida en libras y me las convierta a
kilos, arrobas y toneladas. Si su valor equivalente no corresponde a la unidad buscada de mostrar el
valor que se capturo en libras por teclado. */
function conversor() {

  let libras = prompt("Ingrese el valor en libras:");
  let unidad = prompt("Ingrese la unidad a la que quiere convertir (kg, arroba o tonelada):");
  
  let kilos = libras / 2.2046;
  let arrobas = kilos / 11.3398;
  let toneladas = kilos / 1000;
  
  switch (unidad) {
    case "kg":
      alert(`${libras} libras equivalen a ${kilos} kilos.`);
      break;
    case "arroba":
      alert(`${libras} libras equivalen a ${arrobas} arrobas.`);
      break;
    case "tonelada":
      alert(`${libras} libras equivalen a ${toneladas} toneladas.`);
      break;
    default:
      alert(`Unidad inválida. Valor ingresado en libras: ${libras}`);
  }
}

/*/ 9. Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si
es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse por el mensaje “La rueda es para un
vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrar un el
mensaje “La rueda es para un vehículo pequeño”.*/
function diametro() {

  let diametro = prompt("Ingrese el diámetro de la rueda:");
  let mensaje;
  
  switch (true) {
    case (diametro > 1.4):
      mensaje = "La rueda es para un vehículo grande";
      break;
    case (diametro <= 1.4 && diametro > 0.8):
      mensaje = "La rueda es para un vehículo mediano";
      break;
    default:
      mensaje = "La rueda es para un vehículo pequeño";
  }
  
  alert(mensaje);
}

/*/10. Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4
pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta
rueda es inferior al recomendado” */
function diametro2() {
  
  let diametro = prompt("Ingrese el diámetro de la rueda:");
  let grosor = prompt("Ingrese el grosor de la rueda:");
  
  let mensaje;
  
  switch (true) {
    case (diametro > 1.4 && grosor < 0.4):
      mensaje = "El grosor para esta rueda es inferior al recomendado";
      break;
    case (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25):
      mensaje = "El grosor para esta rueda es inferior al recomendado";
      break;
    default:
      mensaje = "El grosor de la rueda es aceptable";
  }
  
  alert(mensaje);
}

/*/11. Capturar por teclado la calificación de un estudiante y posteriormente se debe mostrar los siguientes
Conceptos: si la calificación fue del rango de 1.0 a 2.9 debe arrojar un resultado que diga “pierde.” de
3.0 a 4.9 debe arrojar un resultado que diga “bueno” Y si la clasificación es 5.0 debe arrojar un
mensaje que diga “excelente”; de lo contrario si alguna de las calificaciones no están dentro del rango
aceptado debe arrojar un mensaje que diga “esa nota no es válida” ósea si es mayor de 5.1. */
function calificaciones() {

  let calificacion = parseFloat(prompt("Ingrese la calificación del estudiante:"));
  let mensaje;

  switch (true) {
    case (calificacion >= 1 && calificacion < 3):
      mensaje = "Pierde";
      break;
    case (calificacion >= 3 && calificacion < 5):
      mensaje = "Bueno";
      break;
    case (calificacion == 5):
      mensaje = "Excelente";
    
  }
  alert(mensaje);
}
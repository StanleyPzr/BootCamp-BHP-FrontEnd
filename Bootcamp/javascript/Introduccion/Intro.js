function suma(){
    var x = 2;
    var y = 5;
    var suma = x + y;
    console.log("El resultado es: " + suma);
}

function crearDiv(){
    var newDiv = document.createElement("div");
    var texto = document.createElement("h1");
    texto.textContent = "HOLA MUNDO"
    newDiv.appendChild(texto);
    document.body.appendChild(newDiv);

}

function saludar(){ 
    alert("HOLAAAA!!!");
}

// Declaraciones de variable

//let = no se puede redeclarar pero si cambiar su valor.
//var = Se puede redeclarar y cambiar valor.
//const = no se redeclara y no cambia su valor.

//-------------------------LET - TEST-------------------------

//let nombre = "dAVID";
//console.log(nombre);

//nombre = "Osorno";
//console.log(nombre);

//nombre = 123;
//console.log(nombre);

//-----------------------CONST - TEST-------------------------

//const nombre = "David"
//console.log(nombre);

//nombr = "Otro";
//console.log(nombr);

const MESES = 12;


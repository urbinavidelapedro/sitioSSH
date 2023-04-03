

// Creamos el elemento <div>
var miDiv = document.createElement("div");

// Añadimos algunos atributos al div
miDiv.setAttribute("id", "miDiv");
miDiv.setAttribute("class", "miClase");

// Creamos un elemento de texto para añadirlo al div
var textoDiv = document.createTextNode("Este es mi div");

// Añadimos el texto al div
miDiv.appendChild(textoDiv);

// Añadimos el div como hijo de otro elemento en el documento (por ejemplo, el body)
// document.body.appendChild(miDiv);


//nuevo ingreso

var miH1 = document.createElement("h1");

miH1.setAttribute("id","miH1");
miH1.setAttribute("class","miClase");

var textoH1 = document.createTextNode("este es mi h1");

miH1.appendChild(textoH1);

// document.body.appendChild(miH1);

var gato = document.getElementById("nemo");

gato.appendChild(miH1);

document.body.insertBefore(miDiv,nemo);


let p = document.getElementById("gatoLigero");
p.onclick = muestraAlerta;

function muestraAlerta(){
    alert("evento pico hey teñe ejecutado");
}


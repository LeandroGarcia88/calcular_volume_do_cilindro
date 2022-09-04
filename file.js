
let raio_inserido = document.querySelector("#raio");
let altura_inserida = document.querySelector("#altura");

let output = document.querySelector("#output");
let button = document.querySelector("#button");

button.addEventListener("click", calcularVolume, false);

const PI = 3.14159;

function calcularVolume(){

	let raio = parseFloat(raio_inserido.value);
	let altura = parseFloat(altura_inserida.value);
	let volume = PI * Math.pow(raio, 2) * altura;
	
	volume = volume.toFixed(3);
	output.innerHTML = volume + " metros " + "<sup>" + 3 + "</sup>";
};




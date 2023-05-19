const palos = ["♦", "♥", "♠", "♣"];
const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function generarCartaAleatoria() {
  const paloAleatorio = Math.floor(Math.random() * 4);
  const valorAleatorio = Math.floor(Math.random() * 13);
  const palo = palos[paloAleatorio];

  return {
    paloArriba: palo,
    paloAbajo: palo,
    valor: valores[valorAleatorio]
  };
}

function mostrarCarta() {
  const carta = generarCartaAleatoria();
  const cartaElement = document.getElementById("carta");
  const paloArribaElement = document.createElement("div");
  const valorElement = document.createElement("div");
  const paloAbajoElement = document.createElement("div");

  paloArribaElement.className = "palo-arriba";
  paloArribaElement.innerText = carta.paloArriba;
  valorElement.className = "valor";
  valorElement.innerText = carta.valor;
  paloAbajoElement.className = "palo-abajo";
  paloAbajoElement.innerText = carta.paloAbajo;

  cartaElement.innerHTML = '';
  cartaElement.appendChild(paloArribaElement);
  cartaElement.appendChild(valorElement);
  cartaElement.appendChild(paloAbajoElement);
}

window.onload = function() {
  mostrarCarta();
};

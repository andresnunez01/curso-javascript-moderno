// import { crearDeck } from "./usecases/crear-deck";
// import { pedirCarta } from "./usecases/pedir-carta";
// import { valorCarta } from "./usecases/valor-carta";

import { crearDeck, pedirCarta, crearNuevaCarta, acumularPuntos, turnoComputadora } from "./usecases";

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];

  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  //REFERENCIAS DEL HTML
  const smallsPts = document.querySelectorAll("small"),
        divCartasJugadores = document.querySelectorAll(".divCartas");

  const btnDetener = document.querySelector("#btnDetener"),
    btnPedir = document.querySelector("#btnPedir"),
    btnNuevo = document.querySelector("#btnNuevo");
    btnPedir.disabled = true;
    btnDetener.disabled = true;

  //ESTA FUNCION INICIALIZA EL JUEGO
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }

    smallsPts.forEach( elem => elem.innerText = 0);

    divCartasJugadores.forEach( elem => elem.innerText = '');

    const cartaComputadora = pedirCarta( deck );
        acumularPuntos(cartaComputadora, puntosJugadores.length - 1, puntosJugadores, smallsPts)
        crearNuevaCarta(cartaComputadora, puntosJugadores.length - 1, divCartasJugadores);

    const cartaJugador = pedirCarta( deck );
        acumularPuntos(cartaJugador, 0, puntosJugadores, smallsPts)
        crearNuevaCarta(cartaJugador, 0, divCartasJugadores);

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  //Eventos

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta( deck ),
        puntosJugador = acumularPuntos(carta, 0, puntosJugadores, smallsPts)

        crearNuevaCarta(carta, 0, divCartasJugadores);

    if (puntosJugador > 21) {
      console.warn("Has perdido");
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(deck, puntosJugadores, smallsPts, divCartasJugadores);
    } else if (puntosJugador === 21) {
      console.warn("21");
      btnPedir.disabled = true;

      turnoComputadora(deck, puntosJugadores, smallsPts, divCartasJugadores);
    }
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();

  });

  btnDetener.addEventListener("click", () => {
    console.clear();
    crearDeck(tipos, especiales);
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(deck, puntosJugadores, smallsPts, divCartasJugadores);
  });

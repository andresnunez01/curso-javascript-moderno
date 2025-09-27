const miModulo = (() => {
  "use strict";

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

  //ESTA FUNCION INICIALIZA EL JUEGO
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }

    smallsPts.forEach( elem => elem.innerText = 0);

    divCartasJugadores.forEach( elem => elem.innerText = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  //FUNCION PARA CREAR UN NUEVO MAZO
  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (const tipo of tipos) {
        deck.push(i + tipo);
      }
    }

    for (const tipo of tipos) {
      for (const especial of especiales) {
        deck.push(especial + tipo);
      }
    }

    return _.shuffle(deck);
  };

  //PEDIR CARTA DENTRO DEL DECK COMENZANDO POR EL INICIO Y VERIFICANDO DISPONIBILIDAD DE CARTAS
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }

    return deck.shift();
  };

  //EXTRAE EL VALOR DE LAS CARTAS
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };

  //CREA UNA CARTA CON LA REFERENCIA DE LA CARTA ELEGIDA Y LA AGREGA MEDIANTE EL DOM
  const crearNuevaCarta = (carta, turno) => {
    let nuevaCarta = document.createElement("img");
    nuevaCarta.classList.add("carta");
    nuevaCarta.src = `assets/cartas/${carta}.png`;
    divCartasJugadores[turno].append(nuevaCarta);
  };

  //TURNO 0 = PRIMER JUGADOR Y ULTIMO SERA LA COMPUTADORA
  const acumularPuntos = (carta, turno) => {
    
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    smallsPts[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
  }

  const determinarGanador = () =>{

    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
      if (
        (puntosMinimos === 21 && puntosComputadora != 21) ||
        (puntosMinimos < 21 && puntosMinimos > puntosComputadora) ||
        (puntosComputadora > 21 && puntosMinimos < 21)
      ) {
        alert("GANASTE");
      } else if (puntosComputadora === puntosMinimos) {
        alert("EMPATE");
      } else {
        alert("PERDISTE");
      }
    }, 500);
  }

  //LOGICA DE JUEGO DE LA COMPUTADORA DESPUES DE LOS CASOS DE JUEGO DEL JUGADOR
  const turnoComputadora = (puntosMinimos) => {

    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1)

        crearNuevaCarta(carta, puntosJugadores.length - 1);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };

  //Eventos

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(),
        puntosJugador = acumularPuntos(carta, 0)

        crearNuevaCarta(carta, 0);

    if (puntosJugador > 21) {
      console.warn("Has perdido");
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("21");
      btnPedir.disabled = true;

      turnoComputadora(puntosJugador);
    }
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();

  });

  btnDetener.addEventListener("click", () => {
    console.clear();
    crearDeck();
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugadores[0]);
  });

  return {
    nuevoJuego: inicializarJuego
  }
})();

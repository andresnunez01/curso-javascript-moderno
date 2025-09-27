class Persona {

    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + 'instancias';
    }

    static mensaje(){
        
        console.log(this.nombre)
        console.log('Soy un metodo estatico')
    }

    nombre = "";
    codigo = "";
    frase = "";
    comida = "";

    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();;
    }

    get getComidaFavorita(){
        return this.comida;
    }
     
    quiensoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase(){
        this.quiensoy();
        console.log(`${this.nombre} dice: ${this.frase}`)
    }
}


const anakin = new Persona('Anakin', 'Skywalker', 'No me gusta la arena');
const kebnobi = new Persona('Obi-Wan','Kenobi', 'I have the high ground');

// console.log(anakin);
// console.log(kebnobi);


// anakin.quiensoy();
// anakin.miFrase();
// anakin.setComidaFavorita = 'Las enmoladas';
// comida = anakin.getComidaFavorita;
// console.log(comida)


console.log('Conteo estatico', Persona._conteo)

Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona)
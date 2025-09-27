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

class Heroe extends Persona{

    clan;

    constructor(nombre, codigo, frase, clan){
        super(nombre, codigo, frase);
        this.clan = clan;
    }


    quiensoy(){
        super.quiensoy();
        console.log(`${this.nombre} dice: ${this.frase}`)
    }
}
const anakin = new Heroe('Anakin', 'Skywalker', 'No me gusta la arena', '501');


// const anakin = new Heroe();

console.log(anakin);
anakin.quiensoy();
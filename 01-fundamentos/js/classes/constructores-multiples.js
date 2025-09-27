class Persona{

    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais)
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }



    getInfo(){
        console.log(`info: ${this.nombre} , ${this.apellido}, ${this.pais}`)
    }
 }

    const nombre = 'Melissa',
        apellido = 'Flores',
        pais = 'Honduras'

    const andres = {
        nombre: 'Andres',
        apellido: 'Nunez',
        pais: 'Mexico'
    }

    const persona1 = new Persona(nombre, apellido, pais);

    persona1.getInfo();

    const persona2 = Persona.porObjeto(andres);

    persona2.getInfo();
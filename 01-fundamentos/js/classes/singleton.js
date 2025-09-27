class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre = ''){
        
        if( !!Singleton.instancia ){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }
}


const instancia = new Singleton('Ironman');
const instancia1 = new Singleton('Ironman1');
console.log(instancia)
console.log(instancia1)
// const and = { 
//     nombre : 'Andres',
//     edad: 40,
//     imprimir() {
//         console.log(`Nombre: ${ this.nombre} - Edad: ${this.edad}`)
//     }
// }

// const fher = { 
//     nombre : 'Fernando',
//     edad: 70,
//     imprimir() {
//         console.log(`Nombre: ${ this.nombre} - Edad: ${this.edad}`)
//     }
// }

// const melissa = { 
//     nombre : 'Melissa',
//     edad: 35
// }


export function Persona(nombre, edad){
    console.log('Se ejecuto esta linea')

    this.nombre = nombre
    this.edad = edad

    this.imprimir = () => {
        console.log(`Nombre: ${ this.nombre} - Edad: ${this.edad}`)
    }

    return;
}


const maria = new Persona('maria', 18);
const melissa = new Persona('melissa', 22);
const Andres = new Persona('Andres', 24);
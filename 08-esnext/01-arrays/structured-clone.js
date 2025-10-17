const superHeroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    },
    {
        id: 3,
        name: 'Flash',
    },
    {
        id: 4,
        name: 'Aquaman',
    }
];


//const array2 = JSON.parse( JSON.stringify(superHeroes));
//const superHeroesCopy = [...superHeroes]  //esto hace que los objetos dentro se modifiquen ya que si no son primitivos pasan por referencia
const superHeroesCopy = structuredClone( superHeroes ) // Esta es la alternativa a usar el spread, quita la referencia de objetos dentro de un arreglo

superHeroesCopy[0].name = 'Green Lantern'
console.table(superHeroes);
console.table(superHeroesCopy);
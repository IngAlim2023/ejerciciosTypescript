type Persona20 ={
    nombre: string;
    apellido: string;
    edad: number;
};

// const persona: Persona20 = {
//     nombre:"Ami",
//     apellido:"Loco",
//     edad:1
// }

// const { nombre, apellido, edad } = persona;

// console.log(nombre, apellido, edad);

const personas: Persona20[] = [
    {
        nombre: "Mirtha", apellido: "Sanchez", edad: 25
    },
    {
        nombre: "Cristian", apellido: "Ramirez", edad: 27
    }
]

const pabloS = personas[0];
const pedroS = personas[1];

console.log(pabloS.apellido);
console.log(pedroS.apellido);

const [pablo, pedro] = personas;
console.log(pablo.apellido);
console.log(pedro.apellido);
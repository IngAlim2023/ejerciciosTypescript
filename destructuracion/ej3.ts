//Funciones
interface UsarioUno{
    nombre: string;
    password: string;
}


function mostrarInfo(usuario: UsarioUno): string{
    const {nombre, password} = usuario;
    return `Nombre: ${nombre}, password: ${password}`
}

const nuevoUser: UsarioUno ={
    nombre: "Alejandro",
    password: "lñajsd34"
}

console.log(mostrarInfo(nuevoUser));
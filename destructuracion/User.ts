class User {
    constructor(
        public nombre: string,
        public correo: string,
        public edad: number,
    ){}
    mostrarInfo(): void{
        const { nombre, correo, edad} = this;
        console.log(`Nombre: ${nombre}, correo: ${correo}, edad:${edad}`);
    }
}

const usuario = new User("Andrea", "and@gmail.com", 28);
usuario.mostrarInfo();
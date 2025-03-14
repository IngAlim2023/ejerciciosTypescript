interface Dispositivo{
    nombre: string;
}
interface Smartphone extends Dispositivo{
    tienePantallaTactil: boolean;
}

const cel: Smartphone = {
    nombre : "Xiaomi xpro",
    tienePantallaTactil : true
}


console.log(`Smartphone: ${cel.nombre} con patalla tactil: ${cel.tienePantallaTactil ? "Si": "No"}`)
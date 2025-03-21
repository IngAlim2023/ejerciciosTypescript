const nombres: string[] = ["Andrew", "klousbare", "Yoysber", "Puthatzzo"];

function imprimirValores ([firts, ...others]: string[]): string{
    return `Primer valor: ${firts}, otros valores: ${others}`
}

console.log(imprimirValores(nombres));
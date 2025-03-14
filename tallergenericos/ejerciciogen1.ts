
const reversafor = <T extends number>(arr: T[]): T[] =>{
    let arrInverso: T[] = [];
    arr.forEach((value)=>{
        arrInverso.unshift(value);
    });
    return arrInverso;
 }
 

let arr34: number[] = [2,6,8,9,10,20]


console.log(reversafor(arr34));
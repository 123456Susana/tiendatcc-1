//codigo artesanal (EGIPTO)
//ENTRADAS
/*let numero1=10
let numero2=20
//proceso
let suma=numero1+numero2
//salida
console.log("la suma es:"+suma)

let numero3=30
let numero4=40
let suma2= numero3+numero4
console.log("suma es:"+suma2)*/

/*//codigo automatico (funciones)
let numero1=5
let numero2=50
//declaracion de la funcion
function sumarDosNumeros(numero1,numero2){
    let suma=numero1+numero2
    console.log("la suma es:"+suma)
}
//para usar una funcion LA DEBO LLAMAR
sumarDosNumeros(numero1,5)
sumarDosNumeros(5,7)*/

//codigo automatico (funciones)
//declaracion de la funcion
function sumarDosNumeros(numero1,numero2){
    let suma=numero1+numero2
    return(suma)
}
//para usar una funcion LA DEBO LLAMAR
let resultado=sumarDosNumeros(2,5)
console.log("la suma es:"+resultado)

//o tambien
console.log("la suma es:"+sumarDosNumeros(2,5))

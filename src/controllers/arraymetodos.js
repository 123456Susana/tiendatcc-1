let plato1={
    nombre:"Cazuela de Mariscos",
    precio: 25000,
    descripcion: "La Cazuela de mariscos es un guiso de mariscos que se disfruta típicamente en las regiones caribeñas de Colombia. Es un guiso a base de leche de coco que contiene verduras, especias, camarones, langosta, camarones, ostras, calamares y otras variedades de pescado.",
    categoria: 1,
    foto:'na'
}

let plato2={
    nombre:"Sancocho",
    precio: 15000,
    descripcion: "El plato colombiano varía entre el pescado de la costa y los diferentes tipos de carne de otras regiones.Siempre contiene yuca, maíz, papas y plátano, por lo general se sirve junto con arroz blanco y aguacate.",
    categoria: 1,
    foto:'na'
}

let plato3={
    nombre:"Picada",
    precio: 40000,
    descripcion: "Este plato abundante y lleno de carne contiene una variedad de carnes a la parrilla (pollo, carne de res, chicharrón de cerdo, chorizo) y generalmente se sirve con una variedad de diferentes tipos de papas, arepas y plátanos. Este plato está diseñado para ser compartido entre familiares o amigos.",
    categoria: 1,
    foto:'na'
}

let plato4={
    nombre:"Tamal",
    precio: 15000,
    descripcion: "Los colombianos tradicionalmente comen tamales con carne y vegetales, este manjar a base de maíz es servido y cocinado envuelto en una hoja de plátano.",
    categoria: 1,
    foto:'na'
}

let plato5={
    nombre:"Bandeja Paisa",
    precio: 25000,
    descripcion: "Esta abundante comida usualmente contiene arroz blanco, frijoles rojos, carne molida o picada, plátano, chorizo, maíz, chicharrón de cerdo, morcilla, huevo frito, arepa y un aguacate.",
    categoria: 1,
    foto:'na'
}

//1. forEach
let platos=[plato1,plato2,plato3,plato4,plato5]

platos.forEach(function(plato){
    console.log(plato.nombre)
})

//2. filter
let resultado=platos.filter(function(plato){
    return(plato.categoria==2)
})
console.log(resultado)

resultado=platos.filter(function(plato){
    return(plato.precio>20000)
})
console.log(resultado)

resultado=platos.filter(function(plato){
    return(plato.precio>20000 & plato.precio<35000)
})
console.log(resultado)

resultado=platos.filter(function(plato){
    return(plato.categoria==1 || plato.categoria==3)
})
console.log(resultado)

//3. find
let busqueda=platos.find(function(plato){
    return(plato.precio==15000)
})
console.log(busqueda)

busqueda=platos.find(function(plato){
    return(plato.categoria==1)
})
console.log(busqueda)

//4.map
let mapa=platos.map(function(plato){
    return(plato.categoria=100)
})
console.log(mapa)

//5. push
let plato6={
    nombre:"Sopa de Guineo",
    precio: 15000,
    descripcion: "Esta abundante comida usualmente contiene arroz blanco, guineo y papa.",
    categoria: 1,
    foto:'na'
}
platos.push(plato6)
console.log(platos)
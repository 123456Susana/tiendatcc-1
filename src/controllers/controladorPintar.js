//funcion para pintar productos en la tienda
export function pintarProductos(productos){
    
    //PASO PARA PINTAR (HACER RENDER) DE ETIQUETAS DE HTML DESDE JS
    //TRAVERSING

    //1. crear una referencia de memoria(variable) que almacena 
    //la etiqueta sobre la cual voy a pintar (ETIQUETA PADRE O ETIQUETA RAIZ)
    let fila=document.getElementById("fila")

    //2. RECORRO EL ARREGLO DE DATOS Y APLICO TRAVERSING
    productos.forEach(function(producto){

    //2.1 Creando una columna desde JS, solo se puede crear etiquetas que esten en html por ejm en este caso esta el div, no se podria poner ejm"juan" porque no existe
    let columna=document.createElement("div")
    columna.classList.add("col","my-3")

    //2.2 Creando la tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","text-center")

    //2.3 Crando la foto
    let fotoProducto=document.createElement("img")
    fotoProducto.classList.add("img-fluid","w-100", "h-100")
    fotoProducto.src=producto.fotos[0]

    //2.4 creando el nombre del producto
    let nombreProducto=document.createElement("h3")
    nombreProducto.textContent=producto.nombre

    //2.5 creando el precio del producto
    let precioProducto=document.createElement("h2")
    precioProducto.classList.add("fw-bold")
    precioProducto.textContent='$'+producto.precio+' COL'

    //2.6 Detectando eventos
    columna.addEventListener("mouseover",function(){
        fotoProducto.src=producto.fotos[1]
    })

    columna.addEventListener("mouseleave",function(){
        fotoProducto.src=producto.fotos[0]
    })

    //3 DEFINO PADRES E HIJOS(se arma el rompecabezas, se va desde lo mas interno hasta lo mas externo)
    tarjeta.appendChild(fotoProducto)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(precioProducto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    })
}


//RECORRIENDO UN ARREGLO (ESCULCAR)

/*productosBD.forEach(function(producto){
    console.log(producto.nombre)
    console.log(producto.fotos[0])
})*/



/*let buscador=document.getElementById("busqueda")

//Detecto escritura en barra de busqueda
buscador.addEventListener("keypress", function(evento){
    console.log(evento.target.value)
})*/

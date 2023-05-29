// CARRITO DE COMPRAS


// --------------------- 


//Declaracion de variables Globales


const productos = [] //array
const carrito = [] //array

local_Storage("leer")

//Si no hay nada cargado en el Storage, toma el archivo json y carga los productos por defecto
if (productos.length == 0) {
    
    // cargarDatos() //API REST
    cargarDatos2()
}
else {
    listarProductos()
    controlBotones()
    console.log('paso por aca')
}
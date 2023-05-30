// CARRITO DE COMPRAS

//Declaracion de variables Globales

const productos = [] //array
const carrito = [] //array

local_Storage("leer")

//Si no hay nada cargado en el Storage, toma datos de la API y carga los productos por defecto
if (productos.length == 0) {
    
    // cargarDatos() //Archivo Json interno
    cargarDatos2() // API externa
}
else {
    listarProductos()
    controlBotones()
}
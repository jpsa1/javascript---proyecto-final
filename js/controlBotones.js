// CONTROLADOR DE BOTONES

function controlBotones() {
    let btnAgregarProducto = document.querySelector("#btn-agregarProducto")
    let btnEliminarProductos = document.querySelector("#btn-eliminarProductos")
    let btnComprarCarrito = document.querySelector("#btn-comprarCarrito")
    let btnVaciarCarrito = document.querySelector("#btn-vaciarCarrito")
    let cajaIngresoDatos = document.querySelector("#ID-cajaIngresoDatos")

    
    //
    let elementoSeleccionado = document.querySelectorAll(".tienda__cajaProductos")
    
    if (productos.length == 0) {
        btnEliminarProductos.disabled = true
        
    }else {
        btnEliminarProductos.disabled = false
    }

    // *** Carrito esta vacio o lleno?
    if (carrito.length == 0) {
        btnVaciarCarrito.disabled = true
        btnComprarCarrito.disabled = true
        
        document.querySelector(".bi-basket").style.display = 'initial'
        document.querySelector(".bi-basket-fill").style.display = 'none'

    }else {
        btnVaciarCarrito.disabled = false
        btnComprarCarrito.disabled = false   

        document.querySelector(".bi-basket").style.display = 'none'
        document.querySelector(".bi-basket-fill").style.display = 'initial'

    }
    
    if (elementoSeleccionado.length == 0) {
        btnEliminarProductos.disabled = true
    }else {
        btnEliminarProductos.disabled = false
    }

    if (cajaIngresoDatos.style.display === "initial") {
        
        btnAgregarProducto.disabled = true
        btnEliminarProductos.disabled = true
        btnVaciarCarrito.disabled = true
        cajaIngresoDatos.disabled = true
    } else {
        btnAgregarProducto.disabled = false
    }

}
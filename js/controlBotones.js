// CONTROLADOR DE BOTONES

function controlBotones() {
    let btnAgregarProducto = document.querySelector("#btn-agregarProducto")
    let btnListarProductos = document.querySelector("#btn-listarProductos")
    let btnEliminarProductos = document.querySelector("#btn-eliminarProductos")
    let btnAgregarCarrito = document.querySelector("#btn-agregarCarrito")
    let btnListarCarrito = document.querySelector("#btn-listarCarrito")
    let btnEliminarItemCarrito = document.querySelector("#btn-eliminarItemCarrito")
    let btnVaciarCarrito = document.querySelector("#btn-vaciarCarrito")
    let cajaIngresoDatos = document.querySelector("#ID-cajaIngresoDatos")
    

    
    //
    let elementoSeleccionado = document.querySelectorAll(".tienda__cajaProductos")
    
    if (productos.length == 0) {
        btnEliminarProductos.disabled = true
        btnAgregarCarrito.disabled = true
        
    }else {
        btnEliminarProductos.disabled = false
        btnListarProductos.disabled = false
    }

    // *** Carrito esta vacio o lleno?
    if (carrito.length == 0) {
        btnVaciarCarrito.disabled = true
        
        document.querySelector(".bi-basket").style.display = 'initial'
        document.querySelector(".bi-basket-fill").style.display = 'none'

    }else {
        btnVaciarCarrito.disabled = false   

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
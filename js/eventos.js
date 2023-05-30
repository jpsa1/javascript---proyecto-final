// **** AGREGAR ****

let btnAgregarProducto = document.querySelector("#btn-agregarProducto")
btnAgregarProducto.addEventListener("click", eventoAgregarProducto)

function eventoAgregarProducto (evento) {
    // Previene la recarga de la pagina.
    evento.preventDefault()

    visualCajaIngresoDatos('mostrar')
}


// **** 1 - AGREGAR PRODUCTOS ****

let btnAgregar = document.querySelector("#btn-agregar")
btnAgregar.addEventListener("click", eventoAgregar)

function eventoAgregar (evento) {
    // Previene la recarga de la pagina.
    evento.preventDefault()
    
    let textNombre = document.querySelector("#textNombre").value
    let textDescripcion = document.querySelector("#textDescripcion").value
    let textPrecio = document.querySelector("#textPrecio").value
    let textStock = document.querySelector("#textStock").value
    let textLink = document.querySelector("#linkImagen").value

    if (textNombre == "" || textDescripcion == "" || textPrecio == 0 || textStock == 0 || textLink == '') {
        sweetAlert('error', 'Opss' ,'Algun dato fue mal ingresado. Intente nuevamente')
    }else{
        cargarProductos(textNombre, textDescripcion, textPrecio, textStock, textLink)
        
        //Limpia los inputs
        textNombre = document.querySelector("#textNombre").value = ""
        textDescripcion = document.querySelector("#textDescripcion").value = ""
        textPrecio = document.querySelector("#textPrecio").value = ""
        textStock = document.querySelector("#textStock").value = ""
        textLink = document.querySelector("#linkImagen").value = ""
        


        //Oculta la caja de agregar productos
        visualCajaIngresoDatos('ocultar')
    }

    // Actualiza la lista
    listarProductos()

    controlBotones()

}

// Boton cancelar de Agregar producto
let btnCancelar = document.querySelector("#btn-cancelar")
btnCancelar.addEventListener("click", eventoCancelar)

function eventoCancelar (evento) {
    // Previene la recarga de la pagina.
    evento.preventDefault()

    visualCajaIngresoDatos('ocultar')
}

// **** 2 - LISTAR PRODUCTOS ****

// let btnListarProductos = document.querySelector("#btn-listarProductos")
// btnListarProductos.addEventListener("click", eventoListarProductos)

// function eventoListarProductos(evento) {
//     evento.preventDefault()

//     listarProductos()
   
//     controlBotones()
    
// }

// **** 3 - ELIMINAR PRODUCTOS ****

btnEliminarProductos = document.querySelector("#btn-eliminarProductos")
btnEliminarProductos.addEventListener("click", eventoEliminarProductos)

function eventoEliminarProductos(evento) {
    evento.preventDefault()

    let elementoSeleccionado

    let cajaProductos = document.querySelectorAll(".tienda__cajaProductos")
    
    cajaProductos = Array.from(cajaProductos)

    elementoSeleccionado = cajaProductos.find(element => element.style.borderWidth == '3.5px');

    eliminarProductos(productos, "productos", elementoSeleccionado)

    //Vuelve a listar los productos para que se actualice la lista
    listarProductos()

    controlBotones()
    
    Toastify({
        text: "Producto eliminado",
        duration: 3000
        }).showToast();

}

// **** 3 - ELIMINAR TODOS ****

btnEliminarTodos = document.querySelector("#btn-eliminarTodos")
btnEliminarTodos.addEventListener("click", eventoEliminarTodos)

function eventoEliminarTodos(evento) {
    
    Swal.fire({
        title: 'Estas seguro?',
        text: "No podras deshacer esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'El articulo ha sido borrado.',
                'success'
            )
        
        evento.preventDefault()

        productos.length = 0

        listarProductos()
        controlBotones() 

        }
      })
    
    
   


} //Cierre de funcion


// **** 5 - LISTAR CARRITO ****

// let btnlistarCarrito = document.querySelector("#btn-listarCarrito")
// btnlistarCarrito.addEventListener("click", eventoListarCarrito)

// function eventoListarCarrito(evento) {
//     evento.preventDefault()

//     listarCarrito()

//     controlBotones()

// }




// **** 6 - VACIAR CARRITO ****

let btnVaciarCarrito = document.querySelector("#btn-vaciarCarrito")
btnVaciarCarrito.addEventListener("click", eventoVaciarCarrito)

function eventoVaciarCarrito(evento) {
    evento.preventDefault()
    
    vaciarCarrito()

    //Vuelve a listar los productos para que se actualice la lista
    listarProductos()

    controlBotones()

}

// **** 7 - COMPRAR CARRITO ****

let btnComprarCarrito = document.querySelector("#btn-comprarCarrito")
btnComprarCarrito.addEventListener("click", eventoComprarCarrito)

function eventoComprarCarrito(evento) {
    evento.preventDefault()
    
    comprarCarrito()

    controlBotones()
}

// **** ICONO MOSTRAR CARRITO ****

document.querySelector(".bi-basket").addEventListener("click", iconoMostrarCarrito)
document.querySelector(".bi-basket-fill").addEventListener("click", iconoMostrarCarrito)

function iconoMostrarCarrito (evento) {
    
    evento.preventDefault()

    visualMostrarCarrito('mostrar')   
}

document.querySelector(".btn-close").addEventListener("click", iconoCerrarCarrito)

function iconoCerrarCarrito (evento) {
    
    evento.preventDefault()

    let element = document.querySelector(".carrito")
    element.className = ("carrito animate__animated animate__bounceOutRight")
    
    setTimeout(() => {
        visualMostrarCarrito('ocultar')
        element.className = ("carrito animate__animated animate__bounceInRight")
    }, 1000);
      
}

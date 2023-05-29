// Muestra el div para ingresar datos de producto
function visualCajaIngresoDatos(accion){
    cajaIngresoDatos = document.querySelector("#ID-cajaIngresoDatos")
    switch (accion) {
        case 'mostrar':
            cajaIngresoDatos.style.display = "initial"
            controlBotones()
            break  
        case 'ocultar': 
            
            let element = document.querySelector("#ID-cajaIngresoDatos")
            element.className = ("cajaIngresoDatos estiloCajas animate__animated animate__zoomOut")
            
            setTimeout(() => {
                element.className = ("cajaIngresoDatos estiloCajas animate__animated animate__zoomIn")
                cajaIngresoDatos.style.display = "none"
                controlBotones()
            }, 200);
            
              
            break;

    }

}

// Muestra el div del carrito

function visualMostrarCarrito (accion) {
    divCarrito = document.querySelector(".carrito")
    switch (accion) {
        case 'mostrar':
            divCarrito.style.display = "initial"
            controlBotones()
            break  
        case 'ocultar': 
            divCarrito.style.display = "none"
            controlBotones()  
            break;
    }


}
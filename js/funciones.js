
// **** Opcion 1: Agregar Productos ****

function cargarProductos(nombre, descripcion, precio, stock, linkImagen) {

    // Carga el producto
    productos.push(new producto(nombre, descripcion, precio, stock, linkImagen))

}


// **** Opcion 2: listar Productos ****

function listarProductos() {

    // Vacia los listados (tienda y carrito)
    document.querySelector("#items").innerHTML =''
    document.querySelector("#id-tienda").innerHTML =''
    
    productos.length == 0 && sweetAlert('info', 'Opss' ,'No hay productos cargados')
    
    for(const elemento of productos) {nuevoItem(elemento)}
    for(const elemento of carrito) {nuevaFila(elemento)}
    
    totalCarrito()

    //Guarda en el LocalStorage
    local_Storage("guardar")

} 


// **** Opcion 3: eliminar Productos. ****

function eliminarProductos(lista,tipo,elementoSeleccionado) {
    
    // Antes de eliminar un producto, primero hay que asegurarse que no haya productos en el carrito
    if (tipo == "productos" && carrito.length != 0) {
        sweetAlert('error','Antes de eliminar un producto de la tienda', 'tiene que VACIAR el carrito.' )        
        return
    }
    
    
    if (elementoSeleccionado == undefined || elementoSeleccionado > (lista.length - 1)) {
        sweetAlert('error','Tiene que seleccionar un item', '' )        

    }else {

        //Si lo que se elimina es un elemento del carrito, entonces sube el stock de la tienda 
        if (tipo =="carrito") {
            for (let i = 0; i < productos.length; i++) {
                if(productos[i].nombre === lista[elementoSeleccionado].nombre) {
                    productos[i].stock += lista[elementoSeleccionado].stock 
                }
            }
        }

        lista.splice(elementoSeleccionado,1)

        local_Storage("guardar")
        
    }
}

// **** Opcion 4: agregar Al Carrito ****

    function agregarAlCarrito (elementoSeleccionado) {
        
        if (elementoSeleccionado < 0) {
            return sweetAlert('error','Tiene que seleccionar un item', '' ) 
        }
                
                        
        if (isNaN(elementoSeleccionado)) {
            return sweetAlert('error','No selecciono ninguna opción', '' )   
        }

        if (productos[elementoSeleccionado].stock > 0) {
            
            let indicecarrito = carrito.findIndex(item => {return item.nombre == productos[elementoSeleccionado].nombre})
            
            if (indicecarrito != -1) {
                carrito[indicecarrito].stock++ 
            }else{
                                
                carrito.push(new producto(productos[elementoSeleccionado].nombre, productos[elementoSeleccionado].descripcion, productos[elementoSeleccionado].precio, 1 )) // Agrega el producto al carrito
                
            }
            //Disminuye en 1 unidad el stock de los productos
            productos[elementoSeleccionado].stock-- 
        }else {
            sweetAlert('info','No hay stock del producto', '' )   

        }
        
    }

// **** Opcion 5: listar Carrito ****

    function listarCarrito() {
        listarProductos()         
    }

// **** Opcion 6: eliminar Item Carrito ****

function eliminarItemCarrito(elementoSeleccionado) {
    
        if (elementoSeleccionado != -1) {
        eliminarProductos(carrito, "carrito", elementoSeleccionado)

        //Vuelve a listar los productos para que se actualice la lista
        listarProductos()
        }         
}

// **** Opcion 7: vaciar Carrito ****

function vaciarCarrito() {
    
    //Aumenta el stock en array productos de los items que se borran del carrito    
    carrito.forEach(elementoCarrito => {
        productos.forEach(elementoProductos => {
            elementoCarrito.nombre === elementoProductos.nombre && (elementoProductos.stock += elementoCarrito.stock)
        })        
    })
    
    carrito.splice(0,carrito.length)
    
    listarProductos() 

    //Coloca la leyenda del total carrito en 0
    totalCarrito()

};

// **** Opcion 8: Comprar Carrito ****

function comprarCarrito() {
    
    sweetAlert('info', 'Compra realizada', 'Tus productos llegaran a tu domicilio')
    
    carrito.splice(0,carrito.length)
    
    listarProductos() 

    //Coloca la leyenda del total carrito en 0
    totalCarrito()

    visualMostrarCarrito('ocultar')


}

    



// *** Total del carrito ****

function totalCarrito() {
    let total = 0
    let contador = 0

    //Suma los precios de los items en el carrito
    if (carrito.length != 0) {
        carrito.forEach(element => {
            total += element.precio * element.stock
            contador+= element.stock
            }
        )
    }else{total = 0}

    // Redondea el numero a 2 decimales
    total = total.toFixed(2)

    //Muestra el total en la pantalla
    document.querySelector(".totalCarrito").innerText = `TOTAL CARRITO: $ ${total}`
    document.querySelector("#carrito-cantidad").textContent = contador
}



// **** Lee o guarda en el Storage ****
function local_Storage(accion) {
    const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)}

    switch (accion) {
        case "guardar":
            guardarLocal("productos", JSON.stringify(productos))
            guardarLocal("carrito", JSON.stringify(carrito))
            break
        case "leer":
            let productosAlmacenados = JSON.parse(localStorage.getItem("productos"))
            let carritoAlmacenado = JSON.parse(localStorage.getItem("carrito"))

            // Si el storage esta vacio, devuelve un array vacio tanto para carrito como para productos
            productosAlmacenados = productosAlmacenados ?? []
            carritoAlmacenado = carritoAlmacenado ?? []

            //Para asegurarse que no tienen ningun elemento. 
            productos.length = 0
            carrito.length = 0
            
            //Cargo en los arrays lo almacenado en Storage
            for (const item of productosAlmacenados)
                productos.push(new producto(item.nombre, item. descripcion, item.precio, item.stock, item.linkImagen))
            for (const item of carritoAlmacenado)
                carrito.push(new producto(item.nombre, item. descripcion, item.precio, item.stock, item.linkImagen))
            break
        }
}

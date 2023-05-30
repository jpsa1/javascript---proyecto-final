//Lista elementos del carrito
function nuevaFila (elemento) {
    let contenido = document.querySelector('#items')

    let tr = document.createElement('tr') // Fila
    
    // Indice
    let td = document.createElement('td') // Columna
    td.innerHTML = `<strong>${carrito.indexOf(elemento) + 1}</strong>`
    tr.appendChild(td)

    // Nombre
    td = document.createElement('td') 
    td.textContent = elemento.nombre
    tr.appendChild(td)

    // Precio
    td = document.createElement('td')
    td.textContent = elemento.precio
    tr.appendChild(td)

    // Cantidad

    td = document.createElement('td')
    td.textContent = elemento.stock
    tr.appendChild(td)

    // Descripcion
    // td = document.createElement('td')
    // td.textContent = elemento.descripcion
    // tr.appendChild(td)

    // Boton
    let btnEliminar = document.createElement('button')
    btnEliminar.textContent = 'X'
    btnEliminar.className = 'btn btn-danger'

    btnEliminar.onclick = () => {
        let posicion = carrito.indexOf(elemento)
        eliminarProductos(carrito,'carrito',posicion)
        listarProductos()
    }

    tr.appendChild(btnEliminar)
    contenido.appendChild(tr)

}

//Lista elementos de la tienda
function nuevoItem (elemento){
    let elem //Se usa para cargar los elementos
    
    let tienda = document.querySelector('#id-tienda')

    //Creo la caja contenedora
    let cajaProducto = document.createElement('div')
    cajaProducto.className = 'tienda__cajaProductos'

    cajaProducto.onclick = () => {
        let posicion = productos.indexOf(elemento)
        let cajaProd = document.querySelectorAll('.tienda__cajaProductos')
        cajaProd.forEach(element => {element.style.borderWidth = '2px'})
        cajaProd[posicion].style.borderWidth = '3.5px'
    }    
    
    
    //Creo el elemento imagen
    elem = document.createElement('img')
    elem.className = 'tienda__cajaProductos__img'
    elem.src = elemento.linkImagen // 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg'
    elem.alt = 'Imagen de producto'
    cajaProducto.appendChild(elem)

    //Creo el titulo
    elem = document.createElement('h4')
    elem.textContent = elemento.nombre
    cajaProducto.appendChild(elem)

    //Creo el precio
    elem = document.createElement('h4')
    elem.textContent = '$' + elemento.precio
    cajaProducto.appendChild(elem)

    //Creo el stock
    elem = document.createElement('h5')
    elem.textContent = 'Stock: ' + elemento.stock
    cajaProducto.appendChild(elem)

    //Creo la descripcion
    elem = document.createElement('p')
    elem.textContent = elemento.descripcion
    cajaProducto.appendChild(elem)

    // Boton
    elem = document.createElement('button')
    elem.textContent = 'Agregar'
    elem.className = 'btn btn-info'

    elem.onclick = () => {
        let posicion = productos.indexOf(elemento)
        agregarAlCarrito(posicion)
        
        listarProductos()
        controlBotones()

        // Muestra el mensaje
        Toastify({
            text: "Agregado al carrito",
            duration: 3000
            }).showToast();
    }

    cajaProducto.appendChild(elem)
    
    tienda.appendChild(cajaProducto)

}



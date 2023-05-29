async function cargarDatos() {
    const response = await fetch('./productos.json')
    const data = await response.json()

    data.forEach(item => {
        productos.push(new producto(item.nombre, item.descripcion, item.precio, item.stock, item.linkImagen))
    });
    listarProductos()
    controlBotones()
}

// Api gratutita externa
async function cargarDatos2() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    data.forEach(item => {
        productos.push(new producto(item.title, item.description, item.price, item.rating.count, item.image))
    })

    listarProductos()
    controlBotones()
}
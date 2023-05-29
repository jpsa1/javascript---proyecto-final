class producto {
    constructor (nombre, descripcion, precio, stock, linkImagen) {
        this.nombre = nombre.toUpperCase()
        this.descripcion = descripcion
        this.precio = parseFloat(precio)
        this.stock = parseInt(stock)
        this.linkImagen = linkImagen
    }
}
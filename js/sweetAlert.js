function sweetAlert (tipo, titulo, mensaje) {
    
    //Tipo: advertencia, error, info
    let respuesta
    
    switch (tipo) {
        case 'info':
            Swal.fire({
                icon: 'info',
                title: titulo,
                text: mensaje,
              })
            break
        case 'error':
            Swal.fire({
                icon: 'error',
                title: titulo,
                text: mensaje,
            })
            break

        }


}
//_______________________________BORRAR HISTORIAL__________________________________

borrar_historial = document.getElementById("borrar_historial")

borrar_historial.onclick = (e) => {
    Swal.fire({
        title: "¿Está seguro que desea borrar el historial completo?",
        showDenyButton: true,
        confirmButtonText: "Confirmar",
        denyButtonText: "descartar"
      }).then((result) => {
        if (result.isConfirmed) {
            location.reload() //ver otra forma sin reload
            localStorage.clear()
        } 
      })
}

//______________________________RECUPERAR HISTORIAL________________________________


recuperar_historial = document.getElementById("recuperar_historial")

recuperar_historial.onclick = (e) => {
    let aviso = ""
    let icono = ""
    try { if (localStorage.getItem("funciones")!==null) {
        historial = localStorage.getItem("funciones")
        funciones_estudiadas = JSON.parse(historial)
        render_funciones(funciones_estudiadas)
        mensaje_analisis(funciones_estudiadas[0].a,funciones_estudiadas[0].b,funciones_estudiadas[0].c)
        aviso = "Se han recuperado los últimos datos"
        icono = "success"
    } else {
        throw new Error ("No hay datos para recuperar")
    }} catch (err) {
        aviso = err
        icono = "error"
    } finally {
        Swal.fire({
            icon: icono,
            text: aviso
          })
    }
}
// _____________________________MENSAJES A IMPRIMIR_____________________________

// Mensaje vértice
function mensaje_vertice (a,b,c) {
    return "El vértice de f es V=(" + redondeo_decimales(vertice(a,b,c)[0],4) + " , " + redondeo_decimales(vertice(a,b,c)[1],4) + ")"
}

// Mensaje raíces
function mensaje_raices (a,b,c) {
    if (cant_raices(a,b,c)==0) {
        return "f no tiene raíces"
    } else if (cant_raices(a,b,c)==1) {
        return "f tiene una única raíz: x="+ redondeo_decimales(resolvente(a,b,c)[0],4)
    } else {
        return "f tiene dos raíces: x=" + redondeo_decimales(resolvente(a,b,c)[0],4) + " y x=" + redondeo_decimales(resolvente(a,b,c)[1],4)
    }
}

// Mensaje ordenada al origen
function mensaje_ordenada_al_origen (c) {
    return "La ordenada al origen es y = "+c
}

// Mensaje eje de simetría
function mensaje_eje_simetria (a,b,c) {
    return "El eje de simetría es: x = " + redondeo_decimales(vertice(a,b,c)[0],4)
}

// Mensaje función en estudio
function mensaje_funcion (a,b,c) {
    return "f(x)= " + a + "x<sup>2</sup> + " + b + "x + " + c 
}

// Mensaje análisis competo
function mensaje_analisis (a,b,c) { 
    texto_vertice.innerText = mensaje_vertice(a,b,c)
    texto_raices.innerText = mensaje_raices(a,b,c)
    texto_ordenada_al_origen.innerText = mensaje_ordenada_al_origen(c)
    texto_eje_simetria.innerText = mensaje_eje_simetria(a,b,c)
    funcion_introducida.innerHTML = mensaje_funcion(a,b,c)

    tabla_de_valores.innerHTML = `<h3>  x </h3> <h3> f(x) </h3>
                                  <h3> -2 </h3> <h3> ${imagen_A(a,b,c)[0]} </h3>
                                  <h3> -1 </h3> <h3> ${imagen_A(a,b,c)[1]} </h3>
                                  <h3>  0 </h3> <h3> ${imagen_A(a,b,c)[2]} </h3>
                                  <h3>  1 </h3> <h3> ${imagen_A(a,b,c)[3]} </h3>
                                  <h3>  2 </h3> <h3> ${imagen_A(a,b,c)[4]} </h3>`
}

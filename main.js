// valores predeterminados de los coeficientes

let coeficiente_a = 1
let coeficiente_b = 0
let coeficiente_c = 0

// array de funciones cuadráticas en estudio

let funciones_estudiadas = []

//_____________________________FUNCIONES MATEMÁTICAS_________________________________

// Discriminante de la función cuadrática
function discriminante(a,b,c) {
    return Math.pow(b,2)-4*a*c
}

// Cantidad de raíces reales de la función cuadrática
function cant_raices(a,b,c) {
    if (discriminante(a,b,c)<0) {
        return 0
    } else if (discriminante(a,b,c)==0) {
        return 1
    } else {
        return 2
    }
}

// Fórmula resolvente
function resolvente(a,b,c) {
    return [(-b+Math.sqrt(discriminante(a,b,c)))/(2*a),(-b-Math.sqrt(discriminante(a,b,c)))/(2*a)]
    
}

// función cuadrática a partir de los coeficientes (de orden superior)
function f (a,b,c) {
    return (x) => {
        resultado = a*Math.pow(x,2) + b*x + c
        return resultado
    }
}

// Vértice de la función cuadrática
function vertice(a,b,c) {
    return [-b/(2*a),f(a,b,c)(-b/(2*a))]
}

function imagen_A (a,b,c) {
    let conjunto_imagen =[]
    for (let i=-2; i<=2; i=i+1) {
    conjunto_imagen.push(f(a,b,c)(i))
    }
    return conjunto_imagen
}

// _____________________________MENSAJES A IMPRIMIR_____________________________

// mensaje vértice
function mensaje_vertice (a,b,c) {
    return "El vértice de f es V=("+ vertice(a,b,c) + ")"
}

// mensaje raíces
function mensaje_raices (a,b,c) {
    if (cant_raices(a,b,c)==0) {
        return "f no tiene raíces"
    } else if (cant_raices(a,b,c)==1) {
        return "f tiene una única raíz: x="+ resolvente(a,b,c)[0]
    } else {
        return "f tiene dos raíces: x=" + resolvente(a,b,c)[0] + " y x=" + resolvente(a,b,c)[1]
    }
}

// mensaje ordenada al origen
function mensaje_ordenada_al_origen (c) {
    return "La ordenada al origen es y = "+c
}

// mensaje eje de simetría
function mensaje_eje_simetria (a,b,c) {
    return "El eje de simetría es: x = " + vertice(a,b,c)[0]
}

//mensaje conjunto imagen de A={-2,-1,0,1,2}
function mensaje_conjunto_imagen (a,b,c) {
    return "El conjunto imagen de A={-2,-1,0,1,2} es: f(A) = {" + imagen_A(a,b,c) + "}"
}

// ______________________________VÍNCULOS HTML - JS_______________________________

let boton_confirmar = document.getElementById("confirmacion")

let input_a = document.getElementById("casilla_a")
let input_b = document.getElementById("casilla_b")
let input_c = document.getElementById("casilla_c")

let funcion_introducida = document.getElementById("funcion_introducida")
let texto_vertice = document.getElementById("texto_vertice")
let texto_raices = document.getElementById("texto_raices")
let texto_ordenada_al_origen = document.getElementById("texto_ordenada_al_origen")
let texto_eje_simetria = document.getElementById("texto_eje_simetria")
let texto_conjunto_imagen = document.getElementById("texto_conjunto_imagen")

// _______________________________EVENTO PRINCIPAL____________________________________

boton_confirmar.onclick = (e) => {

    coeficiente_a = parseFloat(input_a.value)
    coeficiente_b = parseFloat(input_b.value)
    coeficiente_c = parseFloat(input_c.value)

    funciones_estudiadas.unshift({a: coeficiente_a,b: coeficiente_b, c: coeficiente_c})
    
    texto_vertice.innerText = mensaje_vertice(coeficiente_a, coeficiente_b, coeficiente_c)
    texto_raices.innerText = mensaje_raices(coeficiente_a, coeficiente_b, coeficiente_c)
    texto_ordenada_al_origen.innerText = mensaje_ordenada_al_origen(coeficiente_c)
    texto_eje_simetria.innerText = mensaje_eje_simetria(coeficiente_a, coeficiente_b, coeficiente_c)
    texto_conjunto_imagen.innerText = mensaje_conjunto_imagen(coeficiente_a, coeficiente_b, coeficiente_c)

    render_funciones(funciones_estudiadas)

    localStorage.setItem("funciones", JSON.stringify(funciones_estudiadas))

}

//__________________________ARRAY DE FUNCIONES TRABAJADAS__________________________

let funciones_trabajadas = document.getElementById("funciones_trabajadas")

function render_funciones(funciones_array) {
    funciones_trabajadas.innerHTML = []
    funciones_array.forEach(funcion => {

        const num = funciones_array.indexOf(funcion)

        const card = document.createElement("div")
        card.innerHTML = `<h3> f(x)= ${funcion.a}x^2 + ${funcion.b}x + ${funcion.c}</h3>
                          <button id="analizar_${num}"> volver a analizar </button>`
        funciones_trabajadas.appendChild(card)

        document.getElementById(`analizar_${num}`).onclick = (e) => {
            input_a.value = funcion.a
            input_b.value = funcion.b
            input_c.value = funcion.c
            boton_confirmar.onclick()
        }
    })  
}

//_______________________________BORRAR HISTORIAL__________________________________

borrar_historial = document.getElementById("borrar_historial")

borrar_historial.onclick = (e) => {
    location.reload()
    sessionStorage.clear()
}

//______________________________RECUPERAR HISTORIAL________________________________


recuperar_historial = document.getElementById("recuperar_historial")

recuperar_historial.onclick = (e) => {
    historial = localStorage.getItem("funciones")
    funciones_estudiadas = JSON.parse(historial)
    render_funciones(funciones_estudiadas)
}


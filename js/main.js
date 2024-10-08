//__________________________________PREDETERMINADOS___________________________________

// Valores predeterminados de los coeficientes
let coeficiente_a = 1
let coeficiente_b = 0
let coeficiente_c = 0

// Array de funciones cuadráticas en estudio
let funciones_estudiadas = []

// ________________________________VÍNCULOS HTML - JS_________________________________

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

let tabla_de_valores = document.getElementById("tabla_de_valores")
let funciones_trabajadas = document.getElementById("funciones_trabajadas")

// _______________________________EVENTO PRINCIPAL____________________________________

boton_confirmar.onclick = (e) => {

    if ( input_a.value==0 ||
        isNaN (input_a.value) ||
        isNaN (input_b.value) ||
        isNaN (input_c.value) ||
        input_a.value=="" ||
        input_b.value=="" ||
        input_c.value=="") {
        Swal.fire("Los coeficientes a, b y c deben ser números reales con a no nulo");
    
    } else {

        coeficiente_a = parseFloat(input_a.value)
        coeficiente_b = parseFloat(input_b.value)
        coeficiente_c = parseFloat(input_c.value)

        let busqueda = funciones_estudiadas.filter(funcion => 
            funcion.a == coeficiente_a &&
            funcion.b == coeficiente_b &&
            funcion.c == coeficiente_c)

        if (busqueda.length==1) {
            funciones_estudiadas = funciones_estudiadas.filter(funcion =>
                funcion.a !== coeficiente_a ||
                funcion.b !== coeficiente_b ||
                funcion.c !== coeficiente_c
            )
        } 

        funciones_estudiadas.unshift({a: coeficiente_a,b: coeficiente_b, c: coeficiente_c})
        mensaje_analisis(coeficiente_a, coeficiente_b, coeficiente_c)
        render_funciones(funciones_estudiadas)
        localStorage.setItem("funciones", JSON.stringify(funciones_estudiadas))
    }
}

//____________________________ARRAY DE FUNCIONES MODELOS____________________________


let ejemplos = document.getElementById("ejemplos")

fetch("./db/data.JSON")
    .then(response => response.json())
    .then(data => {
        data.forEach( funcion => {

            const num = data.indexOf(funcion)
            const card = document.createElement("div")
            card.setAttribute("id", num)
            card.innerHTML =  `<h3> f(x)= ${funcion.a}x<sup>2</sup> + ${funcion.b}x + ${funcion.c}</h3>
                               <button id="analizar_${num}"> Analizar </button>`
            ejemplos.appendChild(card)                    
       
            document.getElementById(`analizar_${num}`).onclick = (e) => {
                
                let busqueda = funciones_estudiadas.filter(elemento => 
                    elemento.a == funcion.a &&
                    elemento.b == funcion.b &&
                    elemento.c == funcion.c)
        
                if (busqueda.length==1) {
                    funciones_estudiadas = funciones_estudiadas.filter(elemento =>
                        elemento.a !== funcion.a ||
                        elemento.b !== funcion.b ||
                        elemento.c !== funcion.c
                    )
                } 
        
                funciones_estudiadas.unshift({a: funcion.a,b: funcion.b, c: funcion.c})
                mensaje_analisis(funcion.a, funcion.b, funcion.c)
                render_funciones(funciones_estudiadas)
                localStorage.setItem("funciones", JSON.stringify(funciones_estudiadas))
            }      
        })
    })
    
//__________________________ARRAY DE FUNCIONES TRABAJADAS__________________________

function render_funciones(funciones_array) {
        funciones_trabajadas.innerHTML = []
        funciones_array.forEach(funcion => {

        const num = funciones_array.indexOf(funcion)

        const card = document.createElement("div")
        card.setAttribute("id", num)

        card.innerHTML = `<h3> f(x)= ${funcion.a}x<sup>2</sup> + ${funcion.b}x + ${funcion.c}</h3>
                          <button id="volver_analizar_${num}"> volver a analizar </button>
                          <button id="borrar_${num}"> borrar </button>`
        funciones_trabajadas.appendChild(card)

        //botón individual de "volver a analizar"
        document.getElementById(`volver_analizar_${num}`).onclick = (e) => {
            funciones_estudiadas = funciones_estudiadas.filter((objeto) => objeto.a !== funcion.a || 
                                                                           objeto.b !== funcion.b || 
                                                                           objeto.c !== funcion.c)

            funciones_estudiadas.unshift({a:funcion.a, b:funcion.b, c:funcion.c})
            mensaje_analisis(funcion.a, funcion.b, funcion.c)
            render_funciones(funciones_estudiadas)
        }

        //botón individual de "borrar"
        document.getElementById(`borrar_${num}`).onclick = (e) => {
            funciones_estudiadas = funciones_estudiadas.filter((objeto) => objeto.a !== funcion.a || 
                                                                           objeto.b !== funcion.b || 
                                                                           objeto.c !== funcion.c) 
            render_funciones(funciones_estudiadas)
        }
        
        localStorage.setItem("funciones", JSON.stringify(funciones_estudiadas))   
    })

    if (funciones_estudiadas.length>=1) {
        mensaje_analisis(funciones_estudiadas[0].a, funciones_estudiadas[0].b, funciones_estudiadas[0].c)
        evalInput(`a=${funciones_estudiadas[0].a} \n b=${funciones_estudiadas[0].b} \n c=${funciones_estudiadas[0].c}`) 
        } else {
            evalInput("a=1\n b=0 \n c=0")
            localStorage.clear()
            texto_vertice.innerText = ""
            texto_raices.innerText = ""
            texto_ordenada_al_origen.innerText = ""
            texto_eje_simetria.innerText = ""
            funcion_introducida.innerHTML = ""
            tabla_de_valores.innerHTML = ""
    }
}

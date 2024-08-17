// Mensaje de bienvenida
alert("¡Bienvenido al analista de funciones cuadráticas! \n A continuación, ingrese los coeficientes a,b y c de la función a analizar")

// Coeficientes reales a,b y c de la función cuadrática a estudiar
let coef_a = parseFloat(prompt("Ingrese el coeficiente a"))
while (isNaN(coef_a) || coef_a==0) {
    alert("El coeficiente a debe ser un número real no nulo")
    coef_a = parseFloat(prompt("Ingrese el coeficiente a"))
}

let coef_b = parseFloat(prompt("Ingrese el coeficiente b"))
while (isNaN(coef_b)) {
    alert("El coeficiente b debe ser un número real")
    coef_b = parseFloat(prompt("Ingrese el coeficiente b"))
}

const coef_c = parseFloat(prompt("Ingrese el coeficiente c"))
while (isNaN(coef_c)) {
    alert("El coeficiente c debe ser un número real")
    coef_c = parseFloat(prompt("Ingrese el coeficiente c"))
}

// Función cuadrática construida
function f(x) {
    return coef_a*Math.pow(x,2) + coef_b*x + coef_c
}

// Vértice de la función cuadrática
function vertice(a,b,c) {
    return [-b/(2*a),f(-b/(2*a))]
}

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

// Cálculo de imágenes de números enteros entre -5 y 5
let imagen_A = []
for (let i=-5; i<=5; i=i+1) {
    imagen_A.push(f(i))
}

// Interacción con el usuario
let menu = parseInt(prompt("La función cuadrática introducida es: f(x)=" + coef_a + "x^2+" + coef_b + "x+" + coef_c + "\n\n ¿Qué desea hallar? \n 1-Vértice \n 2-Raíces \n 3-Ordenada al origen \n 4-Eje de simetría \n 5-Imagen del conjunto A={-5,-4,...,4, 5} \n 6- Salir"))

while (menu !== 6) {
    switch(menu) {
        case 1:
            alert("El vértice de f es V=(" + vertice(coef_a,coef_b,coef_c) + ")")
            break
        case 2:
            if (cant_raices(coef_a, coef_b, coef_c)==0) {
                alert("f no tiene raíces")
            } else if (cant_raices(coef_a, coef_b, coef_c)==1) {
                alert("f tiene una única raíz: x="+ resolvente(coef_a,coef_b,coef_c)[0])
            } else {
                alert("f tiene dos raíces: x=" + resolvente(coef_a,coef_b,coef_c)[0] + " y x=" + resolvente(coef_a,coef_b,coef_c)[1])
            }
            break
        case 3:
            alert("La ordenada al origen es: y=" + coef_c)
            break
        case 4:
            alert("El eje de simetría es: x=" + vertice(coef_a,coef_b,coef_c)[0])
            break
        case 5:
            alert("El conjunto imagen de A es: f(A)={" + imagen_A + "}")
        default:
            break
    }

    menu = parseInt(prompt("La función cuadrática introducida es: f(x)="+coef_a+"x^2+"+coef_b+"x+"+coef_c + "\n\n ¿Qué desea hallar? \n 1-Vértice \n 2-Raíces \n 3-Ordenada al origen \n 4-Eje de simetría \n 5-Imagen del conjunto A={-5,-4,...,4, 5} \n 6- Salir"))
}

alert("Gracias por su visita")


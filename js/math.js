//_____________________________FUNCIONES MATEMÁTICAS_________________________________

// función cuadrática a partir de los coeficientes
function f (a,b,c) {
    return (x) => {
        resultado = a*Math.pow(x,2) + b*x + c
        return resultado
    }
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

// Vértice de la función cuadrática
function vertice(a,b,c) {
    return [-b/(2*a),f(a,b,c)(-b/(2*a))]
}

// imagen de {-2,-1,0,1,2}
function imagen_A (a,b,c) {
    let conjunto_imagen =[]
    for (let i=-2; i<=2; i=i+1) {
    conjunto_imagen.push(f(a,b,c)(i))
    }
    return conjunto_imagen
}

// Redondear decimales
function redondeo_decimales(num, cifras) {
    redondeo = Math.round(num * Math.pow(10,cifras)) / Math.pow(10,cifras)
    return redondeo
}

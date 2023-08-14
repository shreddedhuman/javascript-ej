alert("Hola, te haré una serie de preguntas")
var clima = prompt("¿Cómo está el clima hoy? (soleado, nublado, lluvioso, frío, etc.)");
var temperatura = parseFloat(prompt("¿Qué temperatura hace? (en grados Celsius)"));
var ocasion = prompt("Cuál es el plan? (trabajo, deporte, casual, etc.)");
var estiloPersonal = prompt("¿Cuál es tu estilo personal? (elegante, informal, vintage, etc.)");
var actividad = prompt("¿Cuál es tu actividad favorita? (pasear, trabajar, hacer ejercicio, etc.)");


var prendaRecomendada = "";

if ((clima === "soleado" || clima === "nublado") && temperatura >= 20) {
    if (ocasion === "casual") {
        prendaRecomendada = "Un vestido ligero y sandalias.";
        document.write("<img src='./imagenes/vestidoysandalias.webp'>")
    } else if (ocasion === "trabajo" && estiloPersonal === "elegante") {
        prendaRecomendada = "Un traje ligero, blusa y zapatos elegantes.";
        document.write("<img src='./imagenes/trajeligero.jpeg'>")
    } else {
        prendaRecomendada = "Pantalones cortos y una camiseta.";
        document.write("<img src='./imagenes/pantalonesligeros.jpeg'>")
    }
} else if ((clima === "lluvioso" || clima === "frío") && temperatura <= 10) {
    if (ocasion === "casual") {
        prendaRecomendada = "Un abrigo, jeans y botas.";
        document.write("<img src='./imagenes/abrigojeans.jpeg'>")
    } else if (ocasion === "trabajo" && estiloPersonal === "elegante") {
        prendaRecomendada = "Un abrigo, pantalón de vestir y botas.";
        document.write("<img src='./imagenes/pantalondevestir.png'>")
    } else {
        prendaRecomendada = "Un suéter, pantalones y botas.";
        document.write("<img src='./imagenes/sueterjeans.png'>")
    }
} else if (actividad === "deporte") {
    prendaRecomendada = "Ropa deportiva y zapatillas.";
    document.write("<img src='./imagenes/deportivo.jpeg'>")
} else {
    prendaRecomendada = "Creo que no encontré algo exacto...";
}


console.log("Recomendación de prenda: " + prendaRecomendada);


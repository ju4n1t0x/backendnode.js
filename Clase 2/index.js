// Ejercicio de la clase 2
console.log("Clase 2");
console.log("Hola desde Node JS");
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");

// Ejercicio de la clase 3

console.log("Clase 3");
const precios = [10, 15, 40, 50, 650.21, 1000, 1550.34, 780.99, 2000, 5850.45];

console.log(
  "Solucion con metodo map, asignando los valores a una nueva variable"
);
const preciosConIva = precios.map((precio) => (precio *= 1.21));
console.log(`El precio es: ${preciosConIva}.- IVA incluido`);

console.log(
  "Solucion utilizando for of para recorrer el array y luego calcular el IVA en cada iteracion del array"
);
for (let precio of precios) {
  const precioConIva1 = (precio *= 1.21);
  console.log(`El precio es: ${precioConIva1}.- IVA incluido`);
}

// Ejercicio de la clase 4

console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
console.log("Clase 4");


class Auto {
    constructor(marca,modelo, anio, color){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
}
//creo un array de autos
const listaAutos = [];

//ingreso los autos al array utilizando un metodo push
listaAutos.push(new Auto("Ford", "Focus", 2020, "Rojo"));

listaAutos.push(new Auto("Ford", "Fiesta", 2015, "Verde"));

listaAutos.push(new Auto("Citroen", "Berlingo", 2013, "Blanca"));

listaAutos.push(new Auto("Citroen", "C4-Lounge", 2022, "Azul"));

listaAutos.push(new Auto("Renault", "Sandero Stepway", 2015, "AzuNegro"));

listaAutos.push(new Auto("Renault", "Logan", 2011, "Gris Plata"));

listaAutos.push(new Auto("Volkswagen", "Gol Trend", 2015, "Negro"));

listaAutos.push(new Auto("Volkswagen", "Vento", 2019, "Blanco"));

listaAutos.push(new Auto("Volkswagen", "Bora", 2010, "Gris Plata"));

listaAutos.push(new Auto("Fiat", "Punto", 2012, "Rojo"));


console.log("Ejercicio 1:");
//meter dentro de una funcion que nos permita ingresar cualquier anio y filtrar por ese anio
const autosMasNuevos = (anio)  => { return listaAutos.filter((auto) => auto.anio > anio);}

//Funcion para mostrar los autos que son mayores a un anio determinado
const mostrarAutos = (anio) =>{
  const autos= autosMasNuevos(anio)
for (const auto of autos){
    console.log(`El auto es: ${auto.marca} ${auto.modelo} ${auto.anio} ${auto.color}`);
}
}
//llamado a la funcion para mostrar los autos
mostrarAutos(2018);


//convertir la funcion en algo que me sirva para cualquier arrray de autos
console.log("Ejercicio 2:");
//Agrego el ingreso del array de autos como parametros a la funcion
const destructuring = (parametroColor, list) => {
  //Contador que va almacenar todos los autos del mismo color
  contadorAutos = 0;
    for (const auto of list){
        const {marca, modelo, anio, color} = auto;
        if (color.toLowerCase() == parametroColor.toLowerCase()){ //agrego metodos toLowerCase para manejar el ingreso de mayusculas y minusculas
            console.log(`El auto es: ${marca} ${modelo} ${anio} ${color}`);
            contadorAutos++;
        }   
    }console.log(`La cantidad de autos ${parametroColor} es: ${contadorAutos}`);
}

//llamo a la funcion destructuring y le paso el color y el array de autos
destructuring("rojo", listaAutos);





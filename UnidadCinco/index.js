//Declaro la clase auto
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

//Creo metodo toString para mostrar los datos de los autos
Auto.prototype.toString = function () {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}, Color: ${this.color}`;
}

//funcion para postear un auto al array 
const agregarAuto = (marca, modelo, anio, color) =>{
    const nuevoAuto = new Auto(marca, modelo, anio, color);
    listaAutos.push(nuevoAuto);
}

//funcion para modificar la marca de un auto en el array
const modificarMarca = (id, marca) => {
    listaAutos[id].marca = marca;
    return listaAutos[id];
}

//funcion para eliminar un auto del array
const eliminarAuto = (id) => {
    listaAutos.splice(id, 1);
    console.log("Se elimino el auto con id: " + id);
    return listaAutos;
}


const args = process.argv.slice(2);

const id = parseInt(args[1])-1;
switch (args[0]) {
    case "GET":
        
    console.log("El dato tomado del array es " + listaAutos[id].toString());
        break;
    
    case "POST":
        agregarAuto(args[1], args[2], args[3], args[4]); 
    console.log("Se agrego con exito en la posicion: " + (listaAutos.length-1));
    console.log(listaAutos[10].toString());
    break;

    case "PUT":
        console.log("Ha seleccionado el auto con el id: " + id);
    console.log(listaAutos[id].toString());
    modificarMarca(id, args[2]);
    console.log(`La marca se actualizo a:` + listaAutos[id].marca);
    console.log(listaAutos[id].toString());
    break;

    case "DELETE":
        console.log("El auto selecionado para eliminar es: " + listaAutos[id].toString());
        eliminarAuto(id);
        console.log("El auto fue eliminado con exito");
        break;

    default:
        console.log("No se ha encontrado el metodo solicitado");
        console.log("Los metodos disponibles son: GET, POST, PUT, DELETE");
        console.log("Ejemplo de uso GET: npm run get <id>");
        console.log("Ejemplo de uso POST: npm run post <marca> <modelo> <anio> <color>");
        console.log("Ejemplo de uso PUT: npm run put <id> <marca>");
        console.log("Ejemplo de uso DELETE: npm run delete <id>");
        break;
}

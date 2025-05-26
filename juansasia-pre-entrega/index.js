
//Juan Igancio Sasia - Pre-entrega

// //Asocio la url de la api a una variable para hacer el metodo fetch reutilizable
const url = 'https://fakestoreapi.com/products'
//Creo el arrego args para almacenar los argumentos que se pasan al script 
//teniendo en cuenta que el primer argumento es el path del script y el segundo es el nombre del script
//por lo que los argumentos que me interesan son a partir del tercer argumento
const args = process.argv.slice(4);
//Creo una variable metodo que almacena el primer y segundo argumento pasados al script
//en mayusculas para poder hacer la comparacion con el switch
const args2 = `${process.argv[2]?.toUpperCase()} ${process.argv[3]?.toUpperCase()}`;

//Creo la configuracion para los metodos GET, POST y DELETE y los asingno a una constante para poder reutilizarlos
const configGET = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const configPost = (title, price, category) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title,
    price,
    category,
  })
})

const configDELETE = {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
}


//Llamo a la api y guardo la respuesta en la variable DATA
async function getInfo (url, config = configGET) {
  try {
    const response = await fetch(url, config)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error', error)
  }
}

//Declaro la funcion getInfo para hacer las peticiones a la api, ya sea la info completa o por id
 function getProductos(){
  if(args[1]){
          getInfo(`${url}/${args[1]}`, configGET) //Asocio el id del producto que viene como arg en consola a la url
          .then((data) => console.log("El producto es: ", data))
        }else{
          getInfo(url, configGET)
          .then((data) => console.log("Los productos son: ", data))
        }

 }

 //Declaro la funcion para postear un producto ingresado por consola a la api
 function postProductos(){
    if(args[1] && args[2] && args[3]){
      const title = args[1]
      const price = parseFloat(args[2])
      const category = args[3]
          getInfo(url, configPost(title, price, category))
          .then((data) => {
            console.log("El producto creado es: ", data)
          })
          //Etiiendo que la api no muestra el producto creado, pero si lo ves el que  yo envio
          //lo genera conn el id 21 sin que yo lo especifique y en la lista completa muestra 
          //hasta el producto 20
          .catch((error) => {console.error('Error en el método POST', error)});
        } else {
          console.error('Faltan argumentos para el metodo POST');
        }
 }


 //Declaro la funcion para eliminar un producto de la ip por id, ingresado por consola
 function deleteProductos(){
  const id = args[1]
        if(!id){
          console.log("Indica el id del producto a eliminar")
          return;
        }
        getInfo(`${url}/${args[1]}`, configDELETE) //Asocio el id del producto que viene como arg en consola a la url
        .then((data) => {
            console.log("El producto eliminado es: ", data)
          })
        }
          

  //Creo un switch para manejar las diferentes opciones dentro de la appi y como default paso el instructivo de uso
switch (args2) {
    case "GET PRODUCTS":
        getProductos()
        break;
    case "POST PRODUCTS":
        postProductos()
        break;
    case "DELETE PRODUCTS":
        deleteProductos()
            break;
        default:
            console.log("Hola has ingresado a mi app para consumir una API");
            console.log("Los metodos disponibles son: GET, POST, DELETE");
            console.log("Ejemplo de uso GET: npm run get products")
            console.log("Ejemplo de uso GET by ID: npm run get products [id]");
            console.log("Ejemplo de uso POST: npm run post products [title][price][category]");
            console.log("Ejemplo de uso DELETE: npm run delete products [id]");
            break;
    }
 


//Asocio la url de la api a una variable para hacer el metodo fetch reutilizable
const url = 'https://fakestoreapi.com/products'
const args = process.argv.slice(4);
const metodo = `${process.argv[2]?.toUpperCase()} ${process.argv[3]?.toUpperCase()}`;

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


const configGET = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const configDELETE = {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
}


//Llamo a la api y guardo la respuesta en la variable DATA
async function getInfo (url, config ={}) {
  try {
    const response = await fetch(url, config)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error', error)
  }
}

 function getProductos(){
  if(args[1]){
          getInfo(`${url}/${args[1]}`, configGET)
          .then((data) => console.log("El producto es: ", data))
        }else{
          getInfo(url, configGET)
          .then((data) => console.log("Los productos son: ", data))
        }

 }
 function postProdctos(){
    if(args[1] && args[2] && args[3]){
      const title = args[1]
      const price = parseFloat(args[2])
      const category = args[3]
          getInfo(url, configPost(title, price, category))
          .then((data) => {
            console.log("El producto creado es: ", data)
            return getInfo(url, configGET)
          })
          .then((totalProductos) => {
            console.log("La lista de actualizada es: ")
            console.log(totalProductos)
          })
          //Etiiendo que la api no muestra el producto creado, pero si lo ves el que  yo envio
          //lo genera conn el id 21 sin que yo lo especifique y en la lista completa muestra 
          //hasta el producto 20
          .catch((error) => {console.error('Error en el método POST', error)});
        } else {
          console.error('Faltan argumentos para el metodo POST');
        }
 }

 function deleteProductos(){
  const id = args[1]
        if(!id){
          console.log("Indica el id del producto a eliminar")
          return;
        }
        getInfo(`${url}/${args[1]}`, configDELETE)
        .then((data) => {
            console.log("El producto eliminado es: ", data)
          })

 }

switch (metodo) {
    case "GET PRODUCTS":
        getProductos()
        break;
    case "POST PRODUCTS":
        postProdctos()
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

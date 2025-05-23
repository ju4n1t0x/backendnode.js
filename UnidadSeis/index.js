// e jercicio 1

const url = 'https://rickandmortyapi.com/api/character'

/*
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const personajes = data.results
    for (let i = 0; i < 5; i++) {
      console.log('Nombre:', personajes[i].name)
      console.log('Estado', personajes[i].status)
      console.log('Especie:', personajes[i].species)
      console.log('Genero:', personajes[i].gender)
      console.log('--------------------------------------')
    }
  })
  .catch((error) => console.error('Error', error))
  .finally(() => console.log('Fetch completed'))
  */
async function getPersonajes (url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    const personajes = data.results.slice(0, 5)
    return personajes
  } catch (error) {
    console.error('Error', error)
  }
}

getPersonajes(url)
  .then((personajes) => {
    personajes.forEach((personaje) => {
      console.log('Nombre:', personaje.name)
      console.log('Estado', personaje.status)
      console.log('Especie:', personaje.species)
      console.log('Genero:', personaje.gender)
      console.log('--------------------------------------')
    })
  })

  .catch((error) => console.error('Error', error))

const axios = require('axios')

// Get hace un pedido
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data)
  })
// Post crea un recurso
const configpost = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Nuevo Post',
    body: 'Este es el cuerpo del nuevo post',
    userId: 1
  })
}
axios.post('https://jsonplaceholder.typicode.com/posts', configpost)
  .then(response => {
    console.log(response.data)
  })
// Put reemplaza un recurso
const configput = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Post actualizado',
    body: 'Este es el cuerpo del post actualizado',
    userId: 1
  })

}
// Put actualizar un recurso => actualizar el perfil de usuario
axios.put('https://jsonplaceholder.typicode.com/posts/1', configput)
  .then(response => {
    console.log(response.data)
  })
// Patch actualizar un algo de un recurso = reset de password
// Delete elimina un recurso

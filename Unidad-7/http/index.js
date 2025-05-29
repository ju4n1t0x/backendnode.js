
const http = require('http');
const fs= require('fs');

const config = (req, res)=>{
    const user ={
        nombnre: "Juan",
        apellido: "Perez"
    }

    const html = fs.readFileSync("../index.html", "utf-8"); //llamo al archivo a traves de file system
    res.statusCode = 200; 
    //res.setHeader("Content-Type", "text/html");
    res.setHeader("Content-Type", "application/json"); //indico que el contenido es de tipo json

    res.end(JSON.stringify(user)); // paso el archivo para que se imprima en el navegador
};

const server = http.createServer(config);

//Listener
const PORT = 5000;
server.listen(PORT), () => {
  console.log(`Server running on port {PORT}`);
}


import express from 'express';
const PORT = 5000;
const app = express();


// routes

app.get('/', (req, res) => { 
  res.status(200).send('Hello, World!');
});

app.get('/nosotros', (req, res) => {
  res.send('NOSOTROS');
});



//app

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
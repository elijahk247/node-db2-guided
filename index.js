const express =require('express');
const server = express();

server.use(express.json());   // required to send json into the body

// provides simple security defaults
const helmet = require('helmet');
server.use(helmet());

// the database and the configurations for it 
const db = require('./database/connection.js');

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'and welcome' });
})


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API running on port ${PORT}`));
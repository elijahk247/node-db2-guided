const express =require('express');
const server = express();

server.use(express.json());   // required to send json into the body

// provides simple security defaults
const helmet = require('helmet');
server.use(helmet());

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'and welcome' });
})


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API running on port ${PORT}`));
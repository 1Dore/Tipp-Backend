const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
//const io = require('socket.io')(http);


app.use(express.json());
app.use(cors());
app.set("port", 3000 || process.env.PORT );

module.exports = app;




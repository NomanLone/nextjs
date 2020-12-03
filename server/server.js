var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var fs = require('fs')
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.get('/books', (req, res) => {
  const books = JSON.parse(fs.readFileSync('books.json'));
  console.log(books);
  res.send({...books})
})


http.listen(3001, () => {
  console.log('listening on *:3000');
});


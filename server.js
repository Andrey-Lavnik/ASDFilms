

const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;


app.use('/actors_info', express.static(__dirname + '/actors_info'))

// app.use(express.static(path.join(__dirname, '/public/films-main')));
// // sendFile will go here
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'films-main/index.html'));
// });
// app.get('/reg', function(req, res) {
//     res.sendFile(path.join(__dirname, './reg.html'));
// });

// app.get('/log', function(req, res) {
//     res.sendFile(path.join(__dirname, './log.html'));
// });


app.listen(port);

console.log('Server started at http://localhost:' + port);









var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({
  dest: 'uploads/'
});

app.use(express.static('public'));


app.get("/", function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/upload', upload.single('file'), function(request, response, next) {
  response.json(request.file);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port + typeof upload);
});
var express = require('express')
var multer = require('multer')
var app = express()

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/index.html')
});

var upload = multer({ dest:'uploads/' })
app.post('/upload', upload.single('file'), function (request, response, next) {
  return response.json(request.file)
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

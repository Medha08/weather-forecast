const express = require("express");
const bodyParser = require("body-parser")
const routes = require("./router/weatherApi")
const path = require("path")
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname + '/public/images'))

app.set('view engine','ejs')
app.set('views',__dirname+"/views")

app.use('/',routes)


app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
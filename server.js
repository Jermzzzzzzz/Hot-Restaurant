//DEPENDECYS HEEYUH
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = 3000;




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



//ROUTES HERE
app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, 'home.html'));
})
app.get('/table',function(req,res){
	res.sendFile(path.join(__dirname, 'table.html'));
})
app.get('/reserve', function(req,res){
	res.sendFile(path.join(__dirname, 'reserve.html'));
})
app.get('/api/table',function(req,res){
	res.json(reserve);
})
app.post('/api/table', function(req,res){
	console.log(req.body);
})
app.listen(PORT, function(){
	console.log('APP IS LISTENING ON PORT: ' + PORT);
});


// 
var reserve = [{
	name: 'justin',
	phone_number: 224-224-2245,
	email: 'justin.jsk.kim@gmail.com',
	unique_id: 1
},{
	name: 'jake',
	phone_number: 224-231-2245,
	email: 'justin.jsk.kim@gmail.com',
	unique_id: 1
},{
	name: 'poop',
	phone_number: 224-432-2245,
	email: 'justin.jsk.kim@gmail.com',
	unique_id: 1
}];
var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var nodemailer = require('nodemailer');
var app=express();
app.set('views', path.join(__dirname,'views'));
app.set('view engine','jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.get('/',function(req,res){
	console.log('hello world');
	res.render('index',{title:'Welcome!'});
});
app.listen(3080);
console.log('Server running on 3000');
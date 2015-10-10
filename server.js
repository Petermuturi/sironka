var express = require ('express');
 var app = express();

 var mongojs = require('mongojs');
 var db = mongojs('products', ['products']);

app.use(express.static(__dirname + "/public"));
	
app.get('/products', function(req, res){
	res.render('404', { status: 404, url: req.url });

   console.log("I recieved")
   hair = {
		image : "image1",
		description : "description1",
		price : "cost1", 
		tax : "tax1"
	};
	body = {
		image : "image2",
		description : "description2",
		price : "cost2", 
		tax : "tax2"
	};
	face = {
		image : "image3",
		description : "description3",
		price : "cost3", 
		tax : "tax3"
	};

	var products = [hair, body, face];
	res.json(products);
});

 app.listen(9119);
 console.log("Server by Peter");
const path = require('path');
const axios = require('axios');
const express = require('express')
const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use('/listing/:pid', express.static( publicPath ));

app.get('/images/:pid', (req, res) => {

	axios.get( 'http://localhost:3001' + req.url )
	.then(response => {
		res.status(200).send(response.data);
	})
	.catch(err => console.log(err));

});

app.get('/api/listing/:productID', (req, res) => {
	axios.get( 'http://localhost:3002' + req.url )
	.then(response => {
		res.status(200).send(response.data);
	})
	.catch(err => console.log(err));
});

app.post('/api/listing/:productID', (req, res) => {
	axios.post( 'http://localhost:3002' + req.url )
	.then(response => {
		res.status(200).send(response.data);
	})
	.catch(err => console.log(err));
});

app.get('/purchase/cart/:pid', (req, res) => {
	axios.get( 'http://localhost:3003' + req.url )
	.then(response => {
		res.status(200).send(response.data);
	})
	.catch(err => console.log(err));
});

app.get('/purchase/item/:pid', (req, res) => {
	axios.get( 'http://localhost:3003' + req.url )
	.then(response => {
		res.status(200).send(response.data);
	})
	.catch(err => console.log(err));
});

app.get('/purchase/shippingInfo/:pid', (req, res) => {
	axios.get( 'http://localhost:3003' + req.url )
	.then(response => {
		res.status(200).send(response.data);
	})
	.catch(err => console.log(err));
});

app.get('/purchase/shippingCost/:departure/:destination', (req, res) => {
	axios.get( 'http://localhost:3003' + req.url )
	.then(response => {
		res.status(200).send(response.data);
	})
	.catch(err => console.log(err));
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));

const path = require('path');
const axios = require('axios');
const express = require('express')
const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use('/listing/:pid', express.static( publicPath ));

app.get('/images/:pid', (req, res) => {

	axios.get( 'http://localhost:3001' + req.url, {

	})
	.then(response => {
		res.status(200).send(response.data);
	})
	.catch(err => console.log(err));

});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));

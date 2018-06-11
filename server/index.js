const path = require('path');
const express = require('express')
const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static( publicPath ));

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('hello world')
// })

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));

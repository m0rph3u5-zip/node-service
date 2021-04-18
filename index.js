const express = require('express');
const port = 5001;
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: '*', credentials: false }));

require('./routes')(app);
module.exports = app;

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});

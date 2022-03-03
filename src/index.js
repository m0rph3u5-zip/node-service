const express = require('express');
const port = process.env.PORT || 5001;
const app = express();

const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: '*', credentials: false }));

require('./routes')(app);
module.exports = app;

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});

const comuniController = require('./api/controller/comuni.controller');

module.exports = (app) => {
    app.get("/", comuniController.root);
    app.post("/comuni/find", comuniController.find);
}
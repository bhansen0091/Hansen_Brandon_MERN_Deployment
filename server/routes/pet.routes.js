const PerController = require("../controllers/pet.controller");

module.exports = (app) => {
    app.get('/api/pets', PerController.index);
    app.post('/api/pets', PerController.create);
    app.get('/api/pets/:id', PerController.show);
    app.put('/api/pets/:id', PerController.update);
    app.delete('/api/pets/:id', PerController.destroy);
}


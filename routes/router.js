const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);

route.get('/add-user', services.add_user)

route.get('/update-user', services.update_user)

route.post('/api/v1/users', controller.create);
route.get('/api/v1/users', controller.find);
route.put('/api/v1/users/:id', controller.update);
route.delete('/api/v1/users/:id', controller.delete);


module.exports = route
'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/planetaController');

router.post('/create', controller.addPlanet);
router.get('/find/name/:name', controller.findByName);
router.get('/find/id/:id', controller.findById);
router.delete('/delete/:id', controller.delete);
router.get('/list', controller.listPlanets);


module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/planetaController');

router.post('/create', controller.addPlanet);
router.get('/list', controller.listPlanets);
router.get('/find/name/:name', controller.findByName);
router.get('/find/id/:id', controller.findById);
router.delete('/delete/:id', controller.delete);

module.exports = router;

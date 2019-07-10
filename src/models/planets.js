'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
    name: {
        type: String,
        required: [
            true,
            'Informe o nome do planeta'
        ],
    },
    climate: {
        type: String,
        required: [
            true,
            'Informe o clima do planeta'
        ],
    },
    terrain: {
        type: String,
        required: [
            true,
            'Informe o terreno do planeta'
        ],
    },
    countFilms:{
        type: Number,
        required: false
    }
}, {timestamps: true});

module.exports = mongoose.model('Planet', PlanetSchema);
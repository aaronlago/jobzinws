'use strict';
const Planet = require('../models/planets');
const axios = require('axios');

// Axio para o SWAPI guarda planetas
const getPlanets = async (url, planets) => {
	let response = await axios.get(url);
	const returnedPlanets = planets.concat(response.data.results);
	if(response.data.next !== null) {
		return getPlanets(response.data.next, returnedPlanets);
	} else {
		return returnedPlanets;
	}
	
}

//Adiciona um planeta conforme model
exports.addPlanet = async(req, res) => {
		try {
			const { name, climate, terrain } = req.body;
			const planets = await getPlanets('https://swapi.co/api/planets', []);
			var films = 0;
			planets.forEach(item => {
				if(item.name === name) {
					films = item.films.length;
				}
			});
            const planet = await Planet
                .create({
                    name,
                    climate,
                    terrain,
                    countFilms: films
                });
			if(!planet) {
                return res.status(400)
                    .send({ error: {
                        description: "Jorge Luccas não criou esse planeta" 
                    }});
			}
			return res.send({
                result:{planet}});
		} catch (err) {
            return res.status(400)
                .send({
                    error: { 
                        description: err.message
                    }
                })
        }
}

// Busca o planeta solicitado
exports.findByName = async(req, res) => {
		try {
			const {name} = req.params;
			const planet = await Planet.findOne({name});
			if(!planet) {
				return res.status(404).send({ error: {
                    description: "Jorge Luccas não criou esse planeta" 
                }});
        }
        return res.send({
            result:{planet}});
    } catch (err) {
        return res.status(400)
            .send({
                error: { 
                    description: err.message
                }
            })
    }
}

// Busca pelo o id solicitado
exports.findById = async(req, res) => {
		try {
			const { id } = req.params;
			const planet = await Planet.findById(id);
			if(!planet) {
                return res.status(404)
                    .send({ error: {
                        description: "Jorge Luccas não criou esse planeta" 
                    }});
        }
        return res.send({
            result:{planet}});
    } catch (err) {
        return res.status(400)
            .send({
                error: { 
                    description: err.message
                }
            })
    }
}

// Encontra o id solicitado e remove
exports.delete =  async(req, res) => {
		try {
			const { id } = req.params;
			await Planet.findByIdAndRemove({_id: id});
			return res.send({ result: "Estrela da morte passou por aqui... planeta removido com sucesso" });
		} catch (err) {
            return res.status(400)
            .send({ 
                error: { 
                    description: err.message
                }})
		}
}

// Lista os planetas
exports.listPlanets = async(req, res) => {
		try {
			const planets = await Planet.find({});
			return res.send({ result: { planets } });
		} catch (err) {
			return res.status(400).send({ error: { description: err.message } })
		}
}
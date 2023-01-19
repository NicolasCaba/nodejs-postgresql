const ArtistModel = require('./../models/artistModel');
const { Op } = require('sequelize');
const AlbumModel = require('../models/albumModel');


const getArtistById = async (req, res) => {
    try {
        let { id } = req.params;

        const response = await ArtistModel.findByPk(id, {
            include: [AlbumModel]
        });

        if(response) {
            res.status(200).send(response);
        } else {
            res.status(404).send({error: `No artist found with id ${id}`})
        }
    } catch (error) {
        res.status(500).send({ error, message: 'Cannot get artist by id' });
    }
}

const createArtist = async (req, res) => {
    try {
        const {body} = req;
        const response = await ArtistModel.create(body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ error, message: 'Cannot create artist' });
    }
}

module.exports = { getArtistById, createArtist };
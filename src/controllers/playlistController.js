const PlaylistModel = require('./../models/playlistModel');
const { Op } = require('sequelize');
const TrackModel = require('../models/trackModel');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getAllPlaylists = async (req, res) => {
    try {
        let filter = {};
        let queryFilter = req.query.q;

        if (queryFilter) {
            filter = {
                where: {
                    name: {
                        [Op.like]: `${queryFilter}%`
                    }
                }
            }
        }

        const response = await PlaylistModel.findAll(filter);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ error, message: 'Cannot get playlists' });
    }
}


const getPlaylistById = async (req, res) => {
    try {
        let { id } = req.params;

        const response = await PlaylistModel.findByPk(id, {
            include: [TrackModel]
        });

        if(response) {
            res.status(200).send(response);
        } else {
            res.status(404).send({error: `No playlist found with id ${id}`})
        }
    } catch (error) {
        res.status(500).send({ error, message: 'Cannot get playlists by id' });
    }
}


// const createPlaylist = async (req, res) => {
//     try {
//         const {body} = req;
//         const response = await PlaylistModel.create(body);
//         res.status(200).send(response);
//     } catch (error) {
//         res.status(500).send({ error, message: 'Cannot create playlist' });
//     }
// }


module.exports = { getAllPlaylists, getPlaylistById, /*createPlaylist*/ };
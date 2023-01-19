const TrackModel = require('./../models/trackModel');
const PlaylistModel = require('./../models/playlistModel');


const getTrackById = async (req, res) => {
    try {
        let { id } = req.params;

        const response = await TrackModel.findByPk(id, {
            include: [PlaylistModel]
        });

        if(response) {
            res.status(200).send(response);
        } else {
            res.status(404).send({error: `No track found with id ${id}`})
        }
    } catch (error) {
        res.status(500).send({ error, message: 'Cannot get track by id' });
    }
}

module.exports = { getTrackById };
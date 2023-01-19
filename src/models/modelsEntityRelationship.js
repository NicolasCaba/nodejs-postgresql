const Artist = require('./artistModel');
const Album = require('./albumModel');

const defineModelsRelationships = () => {
    Artist.hasMany(Album, {
        foreingKey: 'ArtistId'
    });

    Album.belongsTo(Artist, {
        foreingKey: 'ArtistId'
    });
}

module.exports = { defineModelsRelationships };
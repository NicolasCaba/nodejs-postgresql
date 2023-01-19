const { sequelize } = require('./../config/databaseConnection');
const { DataTypes } = require('sequelize');

const Album = sequelize.define('album', {
    id: {
        field: 'AlbumId',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        field: 'Title',
        type: DataTypes.STRING
    },
    artistId: {
        field: 'ArtistId',
        type: DataTypes.INTEGER
    }
}, {
    timestamps: true
}
);

module.exports = Album;
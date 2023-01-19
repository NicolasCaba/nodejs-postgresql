const { sequelize } = require('./../config/databaseConnection');
const { DataTypes } = require('sequelize');

const Track = sequelize.define('track', {
    id: {
        field: 'TrackId',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        field: 'Name',
        type: DataTypes.STRING
    },
    albumId: {
        field: 'AlbumId',
        type: DataTypes.INTEGER
    },
    mediaTypeId: {
        field: 'MediaTypeId',
        type: DataTypes.INTEGER
    },
    genreId: {
        field: 'GenreId',
        type: DataTypes.INTEGER
    },
    composer: {
        field: 'Composer',
        type: DataTypes.STRING
    },
    millisecond: {
        field: 'Millisecond',
        type: DataTypes.INTEGER
    },
    bytes: {
        field: 'Bytes',
        type: DataTypes.INTEGER
    },
    unitPrice: {
        field: 'UnitPrice',
        type: DataTypes.DOUBLE
    }
}, {
    timestamps: true
}
);

module.exports = Track;
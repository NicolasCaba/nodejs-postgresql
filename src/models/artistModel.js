const { sequelize } = require('./../config/databaseConnection');
const { DataTypes } = require('sequelize');

const Artist = sequelize.define('artist', {
    id: {
        field: 'ArtistId',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        field: 'Name',
        type: DataTypes.STRING
    }
}, {
    timestamps: true
}
);



module.exports = Artist;
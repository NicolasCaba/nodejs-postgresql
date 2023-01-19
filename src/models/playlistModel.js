const { sequelize } = require('./../config/databaseConnection');
const { DataTypes } = require('sequelize');

const Playlist = sequelize.define('playlist', {
    id: {
        field: 'PlaylisId',
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

module.exports = Playlist;
const Artist = require('./artistModel');
const Album = require('./albumModel');
const Playlist = require('./playlistModel');
const Track = require('./trackModel');

// entity relationship | entidad relacion
const defineModelsRelationships = () => {
    // Album | Artist
    Artist.hasMany(Album, {
        foreingKey: 'ArtistId'
    });

    Album.belongsTo(Artist, {
        foreingKey: 'ArtistId'
    });

    // Playlist | track
    Playlist.belongsToMany(Track, {
        through: 'playlist_track',
        foreingKey: 'PlaylistId',
        timestamps: false
    });

    Track.belongsToMany(Playlist, {
        through: 'playlist_track',
        foreingKey: 'TrackId',
        timestamps: false
    });
}

module.exports = { defineModelsRelationships };
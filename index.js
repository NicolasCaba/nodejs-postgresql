// environment variables config
require('dotenv').config();

// express
const express = require('express');
const app = express();

const cors = require('cors');

// databaseConnection
const { databaseConnection } = require('./src/config/databaseConnection');
// syncModels
const syncModels = require('./src/utils/syncModels');
// modelsRelationships
const { defineModelsRelationships } = require('./src/models/modelsEntityRelationship');


// cors config
app.use(cors());
app.use(express.json());



// routes
app.use('/api', require('./src/routes/playlistRoutes'));
app.use('/api', require('./src/routes/artistRoutes'));


// express listen
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App runing on port ${PORT}`);
});

// connection to database
databaseConnection();
// database sync models
syncModels();
// database relationships
defineModelsRelationships();
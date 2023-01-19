const { sequelize } = require('./../config/databaseConnection');

const syncModels = async () => {
    try {
        await sequelize.sync();
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.log(error);
    }
}

module.exports = syncModels;
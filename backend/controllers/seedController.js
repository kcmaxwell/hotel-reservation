const { seedDatabase } = require("../database/scripts/seedDatabase")

exports.seedDB = async function(req, res, next) {
    await seedDatabase();
}
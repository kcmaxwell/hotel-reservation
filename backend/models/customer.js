const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
	name: { type: String },
	reservations: [{ type: String, ref: 'Reservation' }],
});

module.exports = mongoose.model('Customer', CustomerSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
	number: { type: String },
    hotel: {type: String, ref: 'Hotel' },
	reservations: [{ type: String, ref: 'Reservation' }],
});

module.exports = mongoose.model('Room', RoomSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
	number: { type: String },
    hotel: {type: Schema.Types.ObjectId, ref: 'Hotel' },
	reservations: [{ type: Schema.Types.ObjectId, ref: 'Reservation' }],
});

module.exports = mongoose.model('Room', RoomSchema);

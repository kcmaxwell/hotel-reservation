const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
	name: { type: String },
	address: { type: String },
	rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }],
});

module.exports = mongoose.model('Hotel', HotelSchema);

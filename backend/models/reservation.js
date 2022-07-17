const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
	startDate: { type: Date },
    endDate: { type: Date },
    customer: { type: String, ref: 'Customer'},
    room: { type: String, ref: 'Room' },
    hotel: { type: String, ref: 'Hotel' },
});

module.exports = mongoose.model('Reservation', ReservationSchema);
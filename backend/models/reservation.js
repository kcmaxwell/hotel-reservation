const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
	startDate: { type: Date },
    endDate: { type: Date },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer'},
    room: { type: Schema.Types.ObjectId, ref: 'Room' },
    hotel: { type: Schema.Types.ObjectId, ref: 'Hotel' },
});

module.exports = mongoose.model('Reservation', ReservationSchema);
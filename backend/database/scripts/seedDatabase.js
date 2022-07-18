const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const faker = require('@faker-js/faker');

const Hotel = require('../../models/hotel');
const Room = require('../../models/room');
const Customer = require('../../models/customer');
const Reservation = require('../../models/reservation');

async function seedDatabase() {
	await emptyDatabase();
	await seedHotels();
}

const emptyDatabase = async function () {
	await Hotel.collection.deleteMany({});
	await Room.collection.deleteMany({});
	await Customer.collection.deleteMany({});
	await Reservation.collection.deleteMany({});
};

const seedHotels = async function () {
	let rawdata = fs.readFileSync(
		path.join(__dirname, '..', 'data', 'canada_hotels.json')
	);
	let hotels = JSON.parse(rawdata);

	for (let hotel of hotels) {
		hotel._id = mongoose.Types.ObjectId();

		hotel.rooms = generateRooms(hotel._id);
	}

	await Hotel.collection.insertMany(hotels);
};

// generates rooms for a given hotel, returns a list of all of their id's
const generateRooms = async function (hotelId) {
	const minRooms = 10;
	const maxRooms = 25;
	const minFloors = 5;
	const maxFloors = 10;

    let rooms = [];

	// randomly pick a number of floors and rooms per floor
	const numFloors = Math.floor(
		Math.random() * (maxFloors - minFloors + 1) + minFloors
	);
	const numRooms = Math.floor(
		Math.random() * (maxRooms - minRooms + 1) + minRooms
	);

	for (let currFloor = 1; currFloor <= numFloors; currFloor++) {
		for (let currRoom = 1; currRoom <= numRooms; currRoom++) {
			let room = {};
			room._id = mongoose.Types.ObjectId();
			room.hotel = hotelId;
			room.reservations = [];

			if (currRoom < 10) {
				room.number = currFloor.toString() + '0' + currRoom.toString();
			} else {
				room.number = currFloor.toString() + currRoom.toString();
			}

            rooms.push(room);
		}
	}

    await Room.collection.insertMany(rooms);

    return rooms.map(room => room._id);
};

// generates reservations for a given room, returns a list of reservation id's for that room
const generateReservations = async function (hotelId, roomId) {
    // randomly select if the room is vacant or not
    const vanact = Math.floor(Math.random() * 2) === 1 ? true : false;

    // randomly select a number of reservations for the room
    const maxReservations = 3;
    const numReservations = Math.floor(Math.random() * (maxReservations + 1));

    let reservations = [];

    for (let curr = 1; curr <= numReservations; curr++) {
        let reservation = {};
        
        // TODO
    }

    await Reservation.collection.insertMany(reservations);

    return reservations.map(r => r._id)
}

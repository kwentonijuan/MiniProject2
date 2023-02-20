const Reservation = require('../models/Reservation');
const Rooms = require('../models/Room');

// get all rooms
const reservation_index = async (req, res) => {
    const limit = 5;
    const page = 1;
    const search = '';

    const total = await Reservation.countDocuments({
        customerName: {$regex: search, $options: 'i'}
    });

    Reservation.find().sort({createdAt: 1})
    .then((result) => {
        res.render('reservation',{title:"RESERVATIONS", data: result, total, limit, page, search});
    })
    .catch(err => console.log(err))
}

// get all rooms
const rooms_index = async (req, res) => {
    Rooms.find().sort({createdAt: 1})
    .then((result) => {
        res.render('reservation-add',{title:"NEW BOOKING", data: result, rooms: null});
    })
    .catch(err => console.log(err))
}

// find room
const rooms_find = (req,res) => {
    let id = req.query.roomIdFind;
    Rooms.findById(id)
    .then((result) => {
        if(result){
            // let results = Rooms.find().sort({createdAt: 1})
            // if (results) {
            //     res.render('reservation-add',{title:"NEW BOOKING", data: results, rooms: result});
            // }
            // Rooms.find().sort({createdAt: 1})
            // .then((results) => {
            //     res.render('reservation-add',{title:"NEW BOOKING", data: results, rooms: result});
            // })
            // .catch(err => console.log(err))
            res.render('reservation-add',{title:"NEW BOOKING", data: null, rooms: result});
        }else{
            res.status(400).send('Id does not exist');
            // res.render('noPageFound', {title:'PAGE NOT FOUND'});
        }
    })
    .catch(err => console.log(err))
}

module.exports = {
    reservation_index,
    rooms_index,
    rooms_find
}
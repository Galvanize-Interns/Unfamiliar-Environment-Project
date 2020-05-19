const mongo = require('mongoose');

const db = mongo.connection

mongo.connect('mongodb://localhost:27017/position', {useNewUrlParser: true});

db.once("open" ,() => {
    console.log('were connected');
});

//import schema here
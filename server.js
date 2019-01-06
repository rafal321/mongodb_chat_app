const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(4000).sockets;

//connect to mongo + callback function
mongo.connect('mongodb://127.0.0.1/mongochat', function(err, db){
    if(err){
        throw err;
    }

    console.log('MongoDB connected succesfully.');

    //connect to socket.io

    client.on('connection', function(){
        //create collection in mongodb
        let chat = db.collection('chats');

        //create function to send status
        sendStatus = function(s){
            socket.emit('status', s); //it's gonna emit the status
        }
        //get chats from mongo collections


    });
});

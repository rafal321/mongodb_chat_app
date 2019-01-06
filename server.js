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
        //get chats from mongo collections (mongodriver, see documentation)
        chat.find().limit(50).sort({_id:1}).toArray(function(err, res){
            if(err){
                throw err;
            }
            //emit meesages
            socket.emit('output', res);
        });
            //handle input event
            socket.on('input', function(data){
                let name = data.name;
                let message = data.message;
                //check for message and name
                if(name == '' || message == ''){
                    sendStatus('Please enter a name and message');
                }else{
                    //inser message into db
                    chat.insert({name: name, message: message}, function(){
                        client.emit('output', [data]);

                        //send status object
                        sendStatus({
                            message: 'Message Sent',
                            clear: true
                        });

                    });
                }

            });
            //handle clear
            scocket.on('on clear', function(data){
                chat.remove({}, function(){
                    socket.emit('cleared');
                });
            });
    });
});

#Rafal log files


## Githup setup
https://www.youtube.com/watch?v=9cMWR-EGFuY&t=207s
## mongoset up - windows + env var
https://www.youtube.com/watch?v=FwMwO8pXfq0


## ==============================================
npm start - to run

npm init >> to create package.json file
npm install mongodb socket.io --save (save will add them to package.json file)

server.js >> reate entry file manually

        //let chat = db.collection('chats'); =================== ERROR HERE!!!!!
        let chat = db.db('mongochat').collection('chats');

as well as in server.js:  use mongodb 2.2.30
"dependencies": {
    "mongodb": "^2.2.33",
    "npm": "^6.5.0",
    "socket.io": "^2.2.0"
  }


#resources 
https://github.com/mongodb/node-mongodb-native

https://github.com/socketio/socket.io  >> Socket.IO enables real-time bidirectional event-based communication. It consists of:
const mongodb = require('mongodb');
require('dotenv').config();

const MongoClient = mongodb.MongoClient;

const url = process.env.MONGO_URL;
let db;

const initDB = callback => {
    if(db){
        return callback(null , db);         //Database is already initialized
    } else {
        MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(client => {
            db = client;
            callback(null, db);
        }).catch(err => callback(err));
    }
}

const getDB = () => {
    if(!db){
        throw new Error('Database is not initalized');
    } else {
        return db;
    }
}

module.exports = { initDB, getDB };
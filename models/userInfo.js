const mongoose = require('mongoose');
const connectionMongoDb = require('./connection');
const timestamp = require('time-stamp');

const userInfoSchema = new mongoose.Schema({

    "data":Array

}, { timestamps: true });

const usersInfo = mongoose.model('usersInfo', userInfoSchema);


module.exports = usersInfo;
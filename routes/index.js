const express = require('express');
const router = express.Router();
const userInfo = require('../models/userInfo');
const axios=require('axios');

setInterval(async () => {
    try {

        const res =await axios.get(`https://reqres.in/api/users?page=2`)
        const result = await userInfo.create({
            data: res.data
        });
       console.log(res.data);

    } catch (error) {
        console.log(`Error to fetch data:${error}`)
    }

}, 420000)




module.exports = router;
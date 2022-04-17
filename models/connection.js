const mongoose = require('mongoose');

module.exports = (async function connectionMongoDb() {

    try {

        const connection = await mongoose.connect('mongodb://localhost:27017/userInfo');
        console.log(`server connected to mongodb`);
        return;
    } catch (error) {

        console.log(`can not connect to mogodb err:${error}`);
        return;
    }


})();
const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

//  Connection stablish with some other mongo url only for the check the dummy database

mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to data base".yellow.bold);
}).catch((error) => {
    console.log(error)
});

const mongoose = require("mongoose");
 
const conn = async () => {
    try {
        const response = await mongoose.connect(`${process.env.MONGO_URI}`);
        if (response){
            console.log("You have succesfully connected to DB")
        }
    } catch (err) {
        console.log(err.stack);
    }
};
conn();

//wIPuJD0yrXC6Mpn
//https://downloads.mongodb.com/compass/mongodb-compass_1.44.4_amd64.deb

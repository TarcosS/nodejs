const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin35:123456ulas@tr2002uk35.gpihjvb.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('Connection Success');
    } catch (error) {
        console.error(error);
    }
}

module.exports = {connect}
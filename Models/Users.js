const mongoose = require('mongoose');

var usersSchema = new mongoose.Schema ({
    Token: {
        type: String,
        unique: true,
    },
    name:{
        type: String,
        require: true
    },
    lastname: String,
    email: String,
    password: String
})

const User = mongoose.model("User", usersSchema);

module.exports = {
    User
}
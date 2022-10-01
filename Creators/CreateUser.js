const { connect } = require("../dbconnection");
const { User } = require("../Models/Users");

connect()

const addUser = new User({
    Token: "",
    name: "Ulaş",
    lastname: "Kökkılıç",
    email: "kokkiliculas@gmail.com",
    password: "09012002ulasK"
})

addUser.save();
const { League } = require("../Models/League")
const { User } = require("../Models/Users")


async function pl1819View(req, res){
    const Token = await User.find({Token: "tr2002kklc35"});
    const view = await League.find({league: "2018-2019 Premier"})
    if (Token[0]) {
        res.send(view)
    } else {
        res.send("<div style='padding:5px; background-color:red; color: white; text-align:center; font-size:1.5rem'>You're not a user.</div>")
    }
    
}
async function pl1718View(req, res){
    const view = await League.find({league: "2017-2018 Premier"})

    res.send(view)
}
async function bl1819View(req, res){
    const view = await League.find({league: "2018-2019 Bundesliga"})

    res.send(view)
}
async function bl1718View(req, res){
    const view = await League.find({league: "2017-2018 Bundesliga"})

    res.send(view)
}

module.exports = {
    pl1819View,
    pl1718View,
    bl1819View,
    bl1718View
}
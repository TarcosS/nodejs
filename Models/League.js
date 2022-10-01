const mongoose = require('mongoose');
const { Schema } = mongoose;

const leagueSchema = new Schema({
    league: String,
    Date: String,
    HomeTeam: String,
    AwayTeam: String,
    FTHG: String,
    FTAG: String
});

const League = mongoose.model('League', leagueSchema);

module.exports = {
    League
}
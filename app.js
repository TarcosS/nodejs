const express = require("express");
const bodyParser = require("body-parser");
const { pl1819View, pl1718View, bl1819View, bl1718View } = require("./Controllers/ViewController.js");
const { connect } = require("./dbconnection.js");
const pl1819 = require('./app.js')
const app = express();
const PORT = 4003;
connect()
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Burası Anasayfa');
});
// app.get('/league', allLeaguesView);
app.get('/league/Premiere-League-2018/2019', pl1819View);
app.get('/league/Premiere-League-2017/2018', pl1718View);
app.get('/league/Bundesliga-2018/2019', bl1819View);
app.get('/league/Bundesliga-2017/2018', bl1718View);

app.listen(PORT, () => console.log(`Server running port: http://localhost:${PORT}`));

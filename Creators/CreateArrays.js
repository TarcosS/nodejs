const fs = require("fs");
const { parse } = require("csv-parse");
const { connect } = require("../dbconnection.js");
const { League } = require("./League.js");

const bl1718 = []
const bl1819 = []
const pl1819 = []
const pl1718 = []

const dbPushArr = []
connect()
fs.createReadStream("./D1_2017-2018_Bundesliga.csv")
    .pipe(
        parse({
        delimiter: ",",
        columns: true,
        ltrim: true,
        })
    )
    .on("data", function (row) {
        bl1718.push(row);
    })
    .on("error", function (error) {
        console.log(error.message);
    })
    .on("end", function () {
        bl1718.map((item) => {
            League.create({
                league: "2017-2018 Bundesliga",
                Date: item.Date,
                HomeTeam: item.HomeTeam,
                AwayTeam: item.AwayTeam,
                FTHG: item.FTHG,
                FTAG: item.FTAG
            })
        })  
    });

    
fs.createReadStream("./D1_2018-2019_Bundesliga.csv")
    .pipe(
        parse({
        delimiter: ",",
        columns: true,
        ltrim: true,
        })
    )
    .on("data", function (row2) {
        // 👇 push the object row2 into the array
        bl1819.push(row2);
    })
    .on("error", function (error) {
        console.log(error.message);
    })
    .on("end", function () {
        bl1819.map((item) => {
            League.create({
                league: "2018-2019 Bundesliga",
                Date: item.Date,
                HomeTeam: item.HomeTeam,
                AwayTeam: item.AwayTeam,
                FTHG: item.FTHG,
                FTAG: item.FTAG
            })
        })  
    });

fs.createReadStream("./E0_2017-2018_Premier.csv")
    .pipe(
        parse({
        delimiter: ",",
        columns: true,
        ltrim: true,
        })
    )
    .on("data", function (row3) {
        // 👇 push the object row3 into the array
        pl1718.push(row3);
    })
    .on("error", function (error) {
        console.log(error.message);
    })
    .on("end", function () {
        pl1718.map((item) => {
            League.create({
                league: "2017-2018 Premier",
                Date: item.Date,
                HomeTeam: item.HomeTeam,
                AwayTeam: item.AwayTeam,
                FTHG: item.FTHG,
                FTAG: item.FTAG
            })
        })  
    });

fs.createReadStream("./E0_2018-2019_Premier.csv")
    .pipe(
        parse({
        delimiter: ",",
        columns: true,
        ltrim: true,
        })
    )
    .on("data", function (row4) {
        // 👇 push the object row4 into the array
        pl1819.push(row4);
    })
    .on("error", function (error) {
        console.log(error.message);
    })
    .on("end", function () {
        pl1819.map((item) => {
            League.create({
                league: "2018-2019 Premier",
                Date: item.Date,
                HomeTeam: item.HomeTeam,
                AwayTeam: item.AwayTeam,
                FTHG: item.FTHG,
                FTAG: item.FTAG
            })
        })  
    });


    
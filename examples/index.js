"use strict";
exports.__esModule = true;
var sra = require("../src/index");
var nbaCalls = new sra.Nba({ apiKey: '' });
nbaCalls.getDailySchedule('2022', '01', '15')
    .then(function (resp) {
    console.log(resp.data);
});

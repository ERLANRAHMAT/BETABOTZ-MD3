/*
   Created By Lann && JerOfc
   Github: https://github.com/ERLANRAHMAT/BETABOTZ-MD3
   Created At: 17 June 2024
   Dont Delete This Watermark and Sell This Code !!!!
*/

const moment = require('moment-timezone');

const getTimeGreeting = () => {
    const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss');
    let dt = '';

    if (time2 < "23:59:00") {
        dt = `Good Night`;
    }
    if (time2 < "19:00:00") {
        dt = `Good Evening`;
    }
    if (time2 < "18:00:00") {
        dt = `Good Evening`;
    }
    if (time2 < "15:00:00") {
        dt = `Good Afternoon`;
    }
    if (time2 < "11:00:00") {
        dt = `Good Morning`;
    }
    if (time2 < "05:00:00") {
        dt = `Good Morning`;
    }

    return dt;
};

module.exports = getTimeGreeting;

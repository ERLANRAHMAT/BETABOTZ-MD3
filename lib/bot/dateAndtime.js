/*
   Created By Lann && JerOfc
   Github: https://github.com/ERLANRAHMAT/BETABOTZ-MD3
   Created At: 17 June 2024
   Dont Delete This Watermark and Sell This Code !!!!
*/

const moment = require('moment-timezone');

const dateAndtime = async () => {
    const jam = await moment.tz('Asia/Jakarta').format('HH:mm:ss');
    const tanggal = await moment().tz('Asia/Jakarta').format('ll');
    return { jam, tanggal };
};

module.exports = dateAndtime;

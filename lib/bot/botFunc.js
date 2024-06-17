/*
   Created By Lann && JerOfc
   Github: https://github.com/ERLANRAHMAT/BETABOTZ-MD3
   Created At: 17 June 2024
   Dont Delete This Watermark and Sell This Code !!!!
*/

const moment = require('moment-timezone');
const fs = require('fs');
const path = require('path');

async function getGroupAdmins(participants) {
    let admins = []
    for (let i of participants) {
        i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ''
    }
    return admins || []
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function hitungmundur(bulan, tanggal) {
    let from = new Date(`${bulan} ${tanggal}, 2023 00:00:00`)
        .getTime();
    let now = Date.now();
    let distance = from - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
}

function msToDate(mse) {
    temp = mse
    days = Math.floor(mse / (24 * 60 * 60 * 1000));
    daysms = mse % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = mse % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = mse % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " Days " + hours + " Hours " + minutes + " Minutes";
}

const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

const sleep = async(ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

const runtime = function(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

const jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}

const tanggal = (numer) => {
    myMonths = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum’at', 'Sabtu'];
    var tgl = new Date(numer);
    var day = tgl.getDate()
    bulan = tgl.getMonth()
    var thisDay = tgl.getDay(),
        thisDay = myDays[thisDay];
    var yy = tgl.getYear()
    var year = (yy < 1000) ? yy + 1900 : yy;
    const time = moment.tz('Asia/Jakarta')
        .format('DD/MM HH:mm:ss')
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0)
        .getTime() - new Date('1 January 1970')
        .getTime()
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]

    return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

module.exports = {
    getGroupAdmins,
    pickRandom,
    hitungmundur,
    msToDate,
    isUrl,
    sleep,
    getRandom,
    runtime,
    jsonformat,
    tanggal
};

/*
    JSON.parse()
    JSON.stringify()

    Date.now()
    Date.toISOString()
    Date.toJSON()
*/

var str = '{ "name": "rahim" }';

var json = JSON.parse(str);             // console.log(json);
var strJson = JSON.stringify(json);     // console.log(strJson);

var date = Date.now();
// console.log(date);

var d = new Date()
var date = d.toUTCString()
var date = d.toJSON()
// console.log(date);

'use strict';
/*global global, require, process, module, baejs*/
/*jslint node: true */

var monk = require('monk');
var os = require('os');
var db;
var url;
if (process.env.SERVER_SOFTWARE === "bae/3.0") {
    url = "xPOla3Kq34SikGXnVWGUFNjj:UIZ1RYdBSiauTePP8gzoxYp9YjoQGumn@mongo.duapp.com:8908/urAFiIKlkjhtaLrPNvit";
} else if (os.platform()==='linux' && os.hostname()=='jsonsong' ) {
    url = '127.0.0.1/spider';}
else if ( os.hostname()=='DESKTOP-92VGR1C' ) {
    url = '127.0.0.1/spider';
}else{
    url = 'mywin.int/spider';
}
db = monk(url);
console.log(url + ' mongodb is init');

module.exports.db = db;
module.exports.url = url;

module.exports.spider =  db.get("spider");


const mysql = require('mysql2');
const { prompt } = require('inquirer');
const prompts = require('./lib/prompts.js');
const functions = require('./lib/functions.js');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'bootcamp',
    database:'db_employeetracker'
})
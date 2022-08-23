const mysql = require('mysql2');
const { prompt } = require('inquirer');
const prompts = require('./lib/prompts.js');
const functions = require('./lib/functions.js');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'bootcamp',
    database:'db_employeetracker'
},
);
const init = () => {
    showQuestions()
};
const preTable = async () => {
    const setDepartment = await functions.returnDeptArray(db);
    prompts.questions[4].choices = setDepartment;
    prompts.questions[12].choices = setDepartment;
    prompts.questions[13].choices = setDepartment;

const setRole = await functions.returnRoleArray(db);
    prompts.questions[7].choices = setRole;
    prompts.questions[10].choices = setRole;
    prompts.questions[14].choices = setRole;

const setEmployee  = await functions.returnEmployeeArray(db);
let setManager = JSON.parse(JSON.stringify(setEmployee));
setManager.unshift({name:"(none",value:null});
    prompts.questions[8].choices = setManager;
    prompts.questions[17].choices = setManager;
    prompts.questions[9].choices = setEmployee;
    prompts.questions[15].choices = setEmployee;
    prompts.questions[16].choices = setEmployee;

const setManagers = await functions.returnManagersArray(db);
    prompts.questions[11].choices = setManagers;
    
const showTable = async () => {
    await preTable()
    const data = await prompt(prompts.questions);
    if(data.responseSelection != -1) {
    showTable();
}else
{
console.log("closing selection");
process.exit();
}
};
};

init();
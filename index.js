const mysql = require('mysql2');
const { prompt } = require('inquirer');
const prompts = require('lib\prompts.js');
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
const prepQuestions = async () => {
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
}
    
const showQuestions = async () => {
    await prepQuestions()
    const data = await prompt(prompts.questions);
    if(data.responseSelection != -1) {
    questionHandler(data);
    showQuestions();
}
else
{
    console.log("closing selection");
    process.exit();
}
}
const questionHandler = (data) => {
const responseSelection = data.responseSelection;
    if(responseSelection < 10) {
        functions.queries(db,data); 
} 
else if (responseSelection >= 10 && responseSelection < 20)
{ 
    if(responseSelection == 10) {functions.createDepartment(db,data.addDepartment)
};
    if(responseSelection == 11) {functions.insertRole(db,data.addRole,data.setSalary,data.employeeDepartment)
};
    if(responseSelection == 12) {functions.insertEmployee(db,data.firstName,data.lastName,data.jobs,data.managers)
};
}
else if (responseSelection>=20 && responseSelection < 30) 
{
    if(responseSelection == 20) {functions.updateRoleId(db,data.employees,data.jobs)
};
    if(responseSelection ==21) {functions.updateManagerId(db,data.employees,data.managers) };
}}

init();

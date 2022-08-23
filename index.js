const mysql = require('mysql2');
const { prompt } = require('inquirer');
const prompts = require('./lib/prompts.js');
const functions = require('./lib/functions.js');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'employeetracker'
},
);
const init = () => {
    showQuestions()
};
const prepQuestions = async () => {
    const arrDept = await functions.returnDepartmentArray(db);
    prompts.questions[4].choices = arrDept;
    prompts.questions[12].choices = arrDept;
    prompts.questions[13].choices = arrDept;

const arrRole = await functions.returnRoleArray(db);
    prompts.questions[7].choices = arrRole;
    prompts.questions[10].choices = arrRole;
    prompts.questions[14].choices = arrRole;

const arrEmp  = await functions.returnEmployeeArray(db);
let arrMgr = JSON.parse(JSON.stringify(arrEmp));
arrMgr.unshift({name:"(none",value:null});
    prompts.questions[8].choices = arrMgr;
    prompts.questions[9].choices = arrEmp;

const arrManagers = await functions.returnManagerArray(db);
    prompts.questions[11].choices = arrManagers;
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
    if(responseSelection == 11) {functions.addRole(db,data.addRole,data.setSalary,data.roleDepartment)
};
    if(responseSelection == 12) {functions.addEmployee(db,data.firstName,data.lastName,data.jobs,data.managers)
};
}
else if (responseSelection>=20 && responseSelection < 30) 
{
    if(responseSelection == 20) {functions.updateRoleId(db,data.employees,data.jobs)
};
    if(responseSelection ==21) {functions.updateManagerId(db,data.employees,data.managers) };
}}

init();

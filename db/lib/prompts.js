const questions = [
{
    type:"list",
    message: "Please Choose from Below",
    choices: [
        {name: "Select all Departments", value:0 },
        {name: "Select all Roles", value:1 },
        {name: "Select all Employees", value:2 },
        {name: "Select all Employees by Manager ", value: 3},
        {name: "Select all Employees by Department", value:4 },
        {name: "View Department Budget usage", value:5},
        {name: "add Department", value:6 },
        {name: "add Role", value:7 },
        {name: "add Employee", value:8 },
        {name: "change Employee Role", value:9 },
        {name: "change assigned Manager for Employee", value:10 }],
            name:"responseSelection"
},
{
    type:"input",
        message:"Name the Department",
        name:"addDepartment", when: (answers) => answers.responseSelection == 6,
},
{
    type:"input",
        message:"Title of Role",
        name:"addRole", when: (answers) => answers.responseSelection == 7
},
{
    type:"input",
        message:"Set Salary for Position",
        name:"setSalary", when: (answers) => answers.responseSelection == 7
},
{
    type:"list",
        message:"Select Department for Role",
        choices:"",
        name: "employeeDepartment", when: (answers) => answers.responseSelection == 7
},
{
    type:"input",
        message:"Please Enter Employee FIRST Name",
        name:"firstName",
        when: (answers) => answers.responseSelection == 8
},
{
    type:"input",
        message:"Please Enter Employee LAST Name",
        name:"lastName",
        when: (answers) => answers.responseSelection == 8
},
{
    type:"list",
        message:"Please Assign Employee Position",
        choices:"",
        name:"jobs",
        when: (answers) => answers.responseSelection == 8
},
{
    type:"list",
        message:"Select Employees Manager",
        choices:"",
        name:"managers",
        when: (answers) => answers.responseSelection == 8
},
{
    type:"list",
        message:"Select Employee to change",
        choices:"",
        name:"employees",
        when: (answers) => answers.responseSelection == 9
},
{
    type:"list",
        message:"Select new Role",
        choices:"",
        name:"roles",
        when: (answers) => answers.responseSelection == 9
},
{
    type:"list",
        message:"Select all Employees by Manager",
        choices:"",
        name:"managers",
        when:(answers) => answers.responseSelection == 3
},
{
    type:"list",
        message:"Select all Employees by Department",
        choices:"",
        name:"departments",
        when: (answers) => answers.responseSelection == 4
},
{
    type:"list",
        message:"Select Employee to Change",
        choices:"",
        name:"employees"
},
{
    type:"list",
        message:"Reasign an Employee to a different Manager",
        choices:"",
        name:"managers",
        when: (answers) => answers.responseSelection == 10
            
}
]
module.exports = {questions}
//const { promises } = require('stream');
require("console.table");

const queries = (db, data) => {
enumQuery = data.responseSelection
let sql;
    
switch (enumQuery) {
        //View all departments
    case (0): {
        sql = "select name, id from department order by name asc;";
        break;
}
    case (1): {
        sql = "select title, role.id, salary, name as department from role join department on role.department_id=department.id order by title asc;";
        break;
}
    case (2): {
        sql = "select employee.id,employee.first_name,employee.last_name,role.title,department.name as department,role.salary,concat(manager.first_name,' ',manager.last_name) as manager from employee join role on employee.role_id=role.id join department on role.department_id=department.id left outer join employee as manager on employee.manager_id = manager.id order by last_name asc, first_name asc;";
        break;
}
    case (3): {
        sql = "select employee.id,employee.first_name,employee.last_name,role.title,department.name as department,role.salary,concat(manager.first_name,' ',manager.last_name) as manager from employee join role on employee.role_id=role.id join department on role.department_id=department.id left outer join employee as manager on employee.manager_id = manager.id where employee.manager_id = "+data.selectedManager+" order by employee.last_name asc, employee.first_name asc;";
        break;
}
    case (4): {
        sql = "select employee.id,employee.first_name,employee.last_name,role.title,department.name as department,role.salary,concat(manager.first_name,' ',manager.last_name) as manager from employee join role on employee.role_id=role.id join department on role.department_id=department.id left outer join employee as manager on employee.manager_id = manager.id where role.department_id = "+data.selectedDepartment+" order by employee.last_name asc, employee.first_name asc;";
        break;
}
    case (5): {
        sql = "select department.name as department,sum(role.salary) as budget from employee join role on employee.role_id=role.id join department on role.department_id=department.id group by department order by department asc;";
        break;
}
}
    db.query(sql, function (err, results) {
        if (err) return console.error(err);
        console.table(results);
    });
}
const sanitize = param => {
    param = param.replaceAll(";","");
    param = param.replaceAll("'","''");
    return param;
}
const createDepartment = (db, name) => {
    const sql = "insert into department (name) values ('"+sanitize(name)+"')"
    db.query(sql);
}

const addRole = (db, title, salary, department_id) => {
    const sql = "insert into role (title, salary, department_id) values ('"+sanitize(title)+"',"+salary+","+department_id+")"
    db.query(sql);
}

const addEmployee = (db, first_name,last_name,role_id,manager_id) => {
    const sql = "insert into employee (first_name,last_name,role_id,manager_id) values ('"+sanitize(first_name)+"','"+sanitize(last_name)+"',"+role_id+","+manager_id+")"
    db.query(sql);
}

const updateManagerId = (db, employee_id, manager_id) => {
    const sql = "update employee set manager_id = "+manager_id+" where id = "+employee_id;
    console.log(sql)
    db.query(sql);
}

const updateRoleId = (db, employee_id,role_id) => {
    const sql = "update employee set role_id = "+role_id+" where id = "+employee_id;
    db.query(sql);
}

const returnRoleArray = (db) =>{
    return new Promise((resolve, reject) => {
        db.query("select title as name, id as value from role order by title asc",(err,results)=>{
            if(err){
                reject(err)
            }
            resolve(results)
        })
    });
}

const returnEmployeeArray = (db) =>{
    return new Promise((resolve, reject) => {
        db.query("select concat(first_name,' ',last_name) as name, id as value from employee order by name asc",(err,results)=>{
            if(err){
                reject(err)
            }
            resolve(results)
        })
    });
}

const returnManagerArray = (db) =>{
    return new Promise((resolve, reject) => {
        db.query("select distinct manager.id as value,concat(manager.first_name,' ',manager.last_name) as name from employee join employee as manager on employee.manager_id = manager.id order by name asc",(err,results)=>{
            if(err){
                reject(err)
            }
            resolve(results)
        })
    });
}

const returnDepartmentArray = (db) =>{
    return new Promise((resolve, reject) => {
        db.query("select name, id as value from department order by name asc",(err,results)=>{
            if(err){
                reject(err)
            }
            resolve(results)
        })
    });
}

module.exports = {
    queries,
    createDepartment,
    addRole,
    addEmployee,
    updateRoleId,
    updateManagerId,
    returnDepartmentArray,
    returnRoleArray,
    returnEmployeeArray,
    returnManagerArray,
};
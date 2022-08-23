DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;
CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30) 
);
CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  INDEX dep_ind (department_id),CONSTRAINT fk_department
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);
CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
role_id UNSIGNED NOT NULL,
INDEX role_ind (role_id),CONSTRAINT fk_role
FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
manager_id UNSIGNED NOT NULL,
INDEX man_ind (manager_id),CONSTRAINT fk_manager
FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL

);
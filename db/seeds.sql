DELETE FROM employee;
DELETE FROM role;
DELETE FROM department;

INSERT INTO department (id,name)
VALUES (1,"Pokemon Trainer"), (2, "Clinic Worker"), (3, "Gym Leader");

INSERT INTO role (id,title,salary,department_id)
VALUES 
(1,"Nurse", 80000,1), (2, "Doctor",300000,1),(3,"helper",20000,1),
(4,"Pokeball Catcher",30000,1),(5,"Pokegrass cutter",40000,1), (6,"Bike mechanic",96000,1),
(7,"Gym Fighter",50000,1);

INSERT INTO employee (id,first_name, last_name,role_id,manager_id)
VALUES (1,"Joe","Shmoe",2,1), (2, "Blues","Clues",5,null);
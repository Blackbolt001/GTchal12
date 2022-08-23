DELETE FROM employee;
DELETE FROM role;
DELETE FROM department;

INSERT INTO department (id,name)
VALUES 
(1,"PokemonTrainer"), 
(2, "ClinicWorker"), 
(3, "GymLeader");

INSERT INTO role (id,title,salary,department_id)
VALUES 
(1,"Nurse", 80000,2), 
(2, "Doctor",300000,2),
(3,"Clinic helper",20000,2),
(4,"Pokeball Catcher",30000,1),
(5,"Pokegrass cutter",40000,1), 
(6,"Bike mechanic",96000,1),
(7,"Gym Fighter",50000,3),
(8,"Gym Cleaner",25000,3),
(9,"Gym Leader",100000,3);

INSERT INTO employee (id,first_name, last_name,role_id,manager_id)
VALUES 
(4,"Joe","Shmoe",7,null), 
(1, "Blues","Clues",2,4),
(2, "Bob","Barker",5,null),
(3, "Michael","Finigan",4,4),
(5, "Poor","Richard",6,2),
(6, "Power","Ranger",3,3) ;
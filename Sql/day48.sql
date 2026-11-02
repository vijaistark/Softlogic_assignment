use sample;

create table department (did int primary key, dname varchar(30) unique not null);

create table students (sid int primary key, sname varchar(30) not null, age int check(age >= 18), city varchar(30) default 'chennai', did int, foreign key(did) references department(did));

create table employees ( eid int primary key, ename varchar(30) not null, salary int check(salary > 0), city varchar(30) default 'chennai', did int, foreign key(did) references department(did));

insert into department values
(10,'it'),(20,'hr'),(30,'sales');
insert into students values
(1,'sam',21,'chennai',10),
(2,'alan',22,'madurai',20),
(3,'joe',23,default,30);
insert into employees values
(101,'ravi',50000,'chennai',10),
(102,'anu',40000,'bangalore',20),
(103,'kiran',60000,default,30);
insert into students values
(4,'john',17,'chennai',10);
insert into employees values
(104,'arun',-5000,'chennai',10);
insert into students values
(5,'meena',22,'chennai',100);

select * from department;
alter table students
add constraint uq_student unique(sname);
alter table employees
add constraint uq_employee unique(ename);
alter table students
drop index uq_student;
alter table employees
drop index uq_employee;
alter table students
add constraint ck_age check(age >= 18);
alter table employees
add constraint ck_salary check(salary >= 10000);
alter table students
drop check ck_age;
alter table employees
drop check ck_salary;
alter table employees
drop foreign key employees_ibfk_1;
alter table employees
add constraint fk_emp foreign key(did)
references department(did);
alter table students
alter city set default 'chennai';
alter table employees
alter city set default 'chennai';
alter table students
alter city drop default;
alter table employees
alter city drop default;
update employees set salary = 55000
where eid = 101;delete from students where sid = 3;
desc department;

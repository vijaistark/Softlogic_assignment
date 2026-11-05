with avg_salary as (
    select avg(salary) as average_salary from employees
)
select emp_id, emp_name, department, salary from employees
where salary > (select average_salary from avg_salary);


with dept_salary as (
    select department, avg(salary) as average_salary from employees
    group by department
)
select department, average_salary from dept_salary;


with average_mark as (
    select avg(mark) as avg_mark from students
)
select student_name, course, mark from students
where mark > (select avg_mark from average_mark);


with product_data as (
    select product_name, category, price from products
)
select product_name, category, price from product_data
where price > 20000;


with employee_bonus as (
    select emp_id, emp_name, salary, salary * 0.10 as bonus from employees
)
select emp_name, salary, bonus, salary + bonus as total_salary
from employee_bonus;
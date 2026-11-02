select *,row_number() over (partition by class order by marks desc) as row_num
from students1;

select *,rank() over (partition by class order by marks desc) as student_rank
from students1;

select *,dense_rank() over (partition by class order by marks desc) as student_rank
from students1;

select *,avg(marks) over (partition by class) as avg_marks
from students1;

select *,max(marks) over (partition by class) as highest_marks
from students1;

select *,row_number() over (partition by subject order by score desc) as row_num
from exam1;

select *,rank() over (partition by subject order by score desc) as student_rank
from exam1;

select *,dense_rank() over (partition by subject order by score desc) as student_rank
from exam1;

select *,count(*) over (partition by subject) as total_students
from exam1;

select *,min(score) over (partition by subject) as minimum_score
from exam1;

select *,row_number() over (partition by department order by salary desc) as row_num
from employees11;

select *,rank() over (partition by department order by salary desc) as emp_rank
from employees11;

select *,dense_rank() over (partition by department order by salary desc) as emp_rank
from employees11;

select *,sum(salary) over (partition by department) as total_salary
from employees11;

select *,avg(salary) over (partition by department) as avg_salary
from employees11;

select *,
row_number() over (order by order_date) as row_num
from orders;

select *,
sum(amount) over (order by order_date rows between unbounded preceding and current row
) as running_total
from orders;

select *,
avg(amount) over ( order by order_date rows between 1 preceding and current row) as moving_avg
from orders;

select *,
max(amount) over ( order by order_date rows between unbounded preceding and current row) as max_amount
from orders;

select *,
count(*) over () as total_orders
from orders;

select *,
row_number() over (
    order by field(month, 'Jan', 'Feb', 'Mar', 'Apr')
) as row_num
from monthly_sales;


select *,
sum(sales) over (
    order by field(month, 'Jan', 'Feb', 'Mar', 'Apr')
    rows between unbounded preceding and current row
) as cumulative_sales
from monthly_sales;
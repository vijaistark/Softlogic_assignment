SELECT emp_name, salary
FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);

SELECT emp_name
FROM Employees
WHERE dept_id = (
    SELECT dept_id FROM Departments
    WHERE dept_name = 'Engineering'
);

SELECT emp_name
FROM Employees
WHERE emp_id IN (
    SELECT emp_id FROM Employee_Projects
);

SELECT emp_name
FROM Employees
WHERE emp_id NOT IN (
    SELECT emp_id FROM Employee_Projects
);

SELECT project_name, budget
FROM Projects
WHERE budget = (SELECT MAX(budget) FROM Projects);

SELECT dept_name
FROM Departments
WHERE dept_id IN (
    SELECT dept_id
    FROM Projects
    GROUP BY dept_id
    HAVING AVG(budget) > (SELECT AVG(budget) FROM Projects)
);

SELECT emp_name, salary
FROM Employees
WHERE salary > (
    SELECT MAX(salary)
    FROM Employees
    WHERE dept_id = (
        SELECT dept_id FROM Departments
        WHERE dept_name = 'Marketing'
    )
);

SELECT emp_name, salary, dept_id
FROM Employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM Employees
    WHERE dept_id = e.dept_id
);

SELECT dept_name
FROM Departments d
WHERE EXISTS (
    SELECT 1
    FROM Employees e
    WHERE e.dept_id = d.dept_id
);

SELECT dept_name
FROM Departments d
WHERE NOT EXISTS (
    SELECT 1
    FROM Projects p
    WHERE p.dept_id = d.dept_id
);

-- Q36
SELECT emp_name, salary,
       (SELECT SUM(salary) FROM Employees) AS total_payroll
FROM Employees;

-- Q37
SELECT emp_name, hire_date
FROM Employees
WHERE hire_date = (SELECT MIN(hire_date) FROM Employees);

-- Q38
SELECT MAX(salary) AS second_highest_salary
FROM Employees
WHERE salary < (SELECT MAX(salary) FROM Employees);

-- Q39
SELECT project_name, budget
FROM Projects
WHERE budget > (
    SELECT COALESCE(SUM(budget), 0)
    FROM Projects
    WHERE dept_id = (
        SELECT dept_id FROM Departments
        WHERE dept_name = 'Sales'
    )
);

SELECT e.emp_name AS employee, m.emp_name AS manager
FROM Employees e
JOIN Employees m ON e.manager_id = m.emp_id
WHERE e.dept_id <> m.dept_id;

SELECT d.dept_name, COUNT(*) AS employee_count
FROM Departments d
JOIN Employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name
HAVING COUNT(*) = (
    SELECT MAX(total)
    FROM (
        SELECT COUNT(*) AS total
        FROM Employees
        GROUP BY dept_id
    ) AS counts
);

SELECT e.emp_name, p.project_name, ep.hours_worked
FROM Employee_Projects ep
JOIN Employees e ON ep.emp_id = e.emp_id
JOIN Projects p ON ep.project_id = p.project_id
WHERE ep.hours_worked = (
    SELECT MAX(hours_worked)
    FROM Employee_Projects
);

SELECT dept_name, location
FROM Departments
WHERE location IN (
    SELECT location
    FROM Departments
    WHERE location LIKE 'New%'
       OR location LIKE 'San%'
);

SELECT emp_name, salary
FROM Employees
WHERE salary > ALL (
    SELECT salary
    FROM Employees
    WHERE hire_date >= '2024-01-01'
      AND hire_date < '2025-01-01'
);

SELECT m.emp_name AS manager, COUNT(*) AS team_size
FROM Employees m
JOIN Employees e ON e.manager_id = m.emp_id
GROUP BY m.emp_id, m.emp_name
HAVING COUNT(*) >= 2;

SELECT project_name, budget
FROM Projects
WHERE budget < (SELECT AVG(budget) FROM Projects);

SELECT e.emp_name, p.project_name
FROM Employee_Projects ep
JOIN Employees e ON ep.emp_id = e.emp_id
JOIN Projects p ON ep.project_id = p.project_id
WHERE (
    SELECT COUNT(*)
    FROM Employee_Projects ep2
    WHERE ep2.project_id = ep.project_id
) = 1;

SELECT emp_name, salary,
       salary - (
           SELECT AVG(e2.salary)
           FROM Employees e2
           WHERE e2.dept_id = e.dept_id
       ) AS difference_from_dept_avg
FROM Employees e;

SELECT d.dept_name, COALESCE(SUM(e.salary), 0) AS total_payroll
FROM Departments d
LEFT JOIN Employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name
HAVING COALESCE(SUM(e.salary), 0) = (
    SELECT MIN(payroll)
    FROM (
        SELECT COALESCE(SUM(e2.salary), 0) AS payroll
        FROM Departments d2
        LEFT JOIN Employees e2 ON d2.dept_id = e2.dept_id
        GROUP BY d2.dept_id
    ) AS payrolls
);

SELECT project_name
FROM Projects p
WHERE EXISTS (
    SELECT 1
    FROM Employee_Projects ep
    WHERE ep.project_id = p.project_id
      AND ep.emp_id IN (
          SELECT emp_id
          FROM Employees
          WHERE dept_id = (
              SELECT dept_id FROM Departments
              WHERE dept_name = 'Engineering'
          )
      )
);
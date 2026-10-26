USE sample;

SELECT COUNT(*) AS total_orders
FROM orders;

SELECT SUM(amount) AS total_order_price
FROM orders;

SELECT AVG(amount) AS average_order_price
FROM orders;

SELECT product_name, SUM(price) AS total_sales FROM orders
GROUP BY product_name;

SELECT MAX(amount) AS maximum_price, MIN(amount) AS minimum_price
FROM orders;

SELECT product_name, SUM(price) AS total_sales
FROM orders
GROUP BY product_name
ORDER BY total_sales DESC;

CREATE TABLE events (id INT PRIMARY KEY,event_name VARCHAR(100),event_date DATE);

INSERT INTO events VALUES
(1, 'Workshop', '2026-01-15'),
(2, 'Seminar', '2026-03-20'),
(3, 'Conference', '2026-06-10'),
(4, 'Hackathon', '2026-10-25'),
(5, 'Meeting', '2026-12-05');

SELECT NOW() AS current_datetime;

SELECT event_name, DATE_FORMAT(event_date, '%d-%m-%Y') AS formatted_date
FROM events;

SELECT event_name, YEAR(event_date) AS event_year,MONTH(event_date) AS event_month
FROM events;

SELECT CONCAT(event_name, ' - ', DATE_FORMAT(event_date, '%d-%m-%Y')) AS event_details
FROM events;
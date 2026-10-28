CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    Phone VARCHAR(15),
    Address VARCHAR(100),
    City VARCHAR(50),
    RegistrationDate DATE
);


DELIMITER //

CREATE PROCEDURE AddCustomer(
    IN ID INT,
    IN FirstName VARCHAR(50),
    IN LastName VARCHAR(50),
    IN Email VARCHAR(100),
    IN Phone VARCHAR(15),
    IN Address VARCHAR(100),
    IN City VARCHAR(50),
    IN RegDate DATE
)
BEGIN
    INSERT INTO Customers
    VALUES (ID, FirstName, LastName, Email, Phone, Address, City, RegDate);
END //

CREATE PROCEDURE GetCustomer(IN ID INT)
BEGIN
    SELECT * FROM Customers WHERE CustomerID = ID;
END //


CREATE PROCEDURE UpdateContact(
    IN ID INT,
    IN Email VARCHAR(100),
    IN Phone VARCHAR(15)
)
BEGIN
    UPDATE Customers
    SET Email = Email, Phone = Phone
    WHERE CustomerID = ID;
END //

CREATE PROCEDURE GetByCity(IN CityName VARCHAR(50))
BEGIN
    SELECT * FROM Customers WHERE City = CityName;
END //


CREATE PROCEDURE DeleteCustomer(IN ID INT)
BEGIN
    DELETE FROM Customers WHERE CustomerID = ID;
END //


CREATE PROCEDURE GetByDate(
    IN StartDate DATE,
    IN EndDate DATE
)
BEGIN
    SELECT * FROM Customers
    WHERE RegistrationDate BETWEEN StartDate AND EndDate;
END //


CREATE PROCEDURE SearchCustomer(IN SearchName VARCHAR(50))
BEGIN
    SELECT * FROM Customers
    WHERE FirstName LIKE CONCAT('%', SearchName, '%')
       OR LastName LIKE CONCAT('%', SearchName, '%');
END //


CREATE PROCEDURE UpdateAddress(
    IN ID INT,
    IN NewAddress VARCHAR(100),
    IN NewCity VARCHAR(50)
)
BEGIN
    UPDATE Customers
    SET Address = NewAddress, City = NewCity
    WHERE CustomerID = ID;
END //


CREATE PROCEDURE CountCustomers()
BEGIN
    SELECT COUNT(*) AS TotalCustomers FROM Customers;
END //

-- 10. Customers without email
CREATE PROCEDURE NoEmail()
BEGIN
    SELECT * FROM Customers
    WHERE Email IS NULL OR Email = '';
END //

DELIMITER ;




CALL AddCustomer(1, 'Vijay', 'Raja', 'vijay@gmail.com',
'9876543210', 'Anna Nagar', 'Chennai', '2026-10-28');
CALL GetCustomer(1);
CALL UpdateContact(1, 'new@gmail.com', '9876543211');
CALL GetByCity('Chennai');
CALL DeleteCustomer(1);
CALL GetByDate('2026-01-01', '2026-12-31');
CALL SearchCustomer('Vij');
CALL UpdateAddress(1, 'KK Nagar', 'Chennai');
CALL CountCustomers();
CALL NoEmail();
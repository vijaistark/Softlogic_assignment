class Student {

    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
    }

    displayStudent() {
        console.log("Student Details");
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }
}

let student1 = new Student(101, "Vijaya", 85);

student1.displayStudent();

// class Employee {

//     constructor() {
//         this.empId = "";
//         this.empName = "";
//         this.designation = "";
//         this.salary = "";
//     }

//     inputEmployee() {
//         this.empId = prompt("Employee ID:");
//         this.empName = prompt("Employee Name:");
//         this.designation = prompt("Designation:");
//         this.salary = prompt("Salary:");
//     }

//     displayEmployee() {
//         console.log("Employee Details");
//         console.log("Employee ID:", this.empId);
//         console.log("Employee Name:", this.empName);
//         console.log("Designation:", this.designation);
//         console.log("Salary:", this.salary);
//     }
// }

// let employee1 = new Employee();

// employee1.inputEmployee();
// employee1.displayEmployee();


// class Customer {

//     constructor() {
//         this.customerId = "";
//         this.cName = "";
//         this.mobile = "";
//         this.address = "";
//     }

//     inputCustomer() {
//         this.customerId = prompt("Customer ID:");
//         this.cName = prompt("Customer Name:");
//         this.mobile = prompt("Mobile:");
//         this.address = prompt("Address:");
//     }

//     displayCustomer() {
//         console.log("Customer Details");
//         console.log("Customer ID:", this.customerId);
//         console.log("Customer Name:", this.cName);
//         console.log("Mobile:", this.mobile);
//         console.log("Address:", this.address);
//     }
// }

// let customer1 = new Customer();

// customer1.inputCustomer();
// customer1.displayCustomer();


// class Staff {

//     constructor() {
//         this.staffId = "";
//         this.sName = "";
//         this.mobile = "";
//         this.email = "";
//         this.department = "";
//         this.address = "";
//     }

//     inputStaff() {
//         this.staffId = prompt("Staff ID:");
//         this.sName = prompt("Staff Name:");
//         this.mobile = prompt("Mobile:");
//         this.email = prompt("Email:");
//         this.department = prompt("Department:");
//         this.address = prompt("Address:");
//     }

//     displayStaff() {
//         console.log("Staff Details");
//         console.log("Staff ID:", this.staffId);
//         console.log("Staff Name:", this.sName);
//         console.log("Mobile:", this.mobile);
//         console.log("Email:", this.email);
//         console.log("Department:", this.department);
//         console.log("Address:", this.address);
//     }
// }

// let staff1 = new Staff();

// staff1.inputStaff();
// staff1.displayStaff();
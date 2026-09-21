class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    display() {
        console.log(this.id, this.name, this.salary);
    }
}

let e1 = new Employee(101, "Vijaya", 25000);
e1.display();


class Vehicle {
    constructor(type) {
        this.type = type;
    }

    display() {
        console.log(this.type);
    }
}

class Car extends Vehicle {
    constructor(type, brand) {
        super(type);
        this.brand = brand;
    }
}

class SportsCar extends Car {
    constructor(type, brand, model) {
        super(type, brand);
        this.model = model;
    }

    displaySportsCar() {
        this.display();
        console.log(this.brand, this.model);
    }
}

let s1 = new SportsCar("Car", "Toyota", "Supra");
s1.displaySportsCar();


class Shape {
    display() {
        console.log("Shape");
    }
}

class Rectangle extends Shape {
    constructor(length, breadth) {
        super();
        this.length = length;
        this.breadth = breadth;
    }

    area() {
        console.log(this.length * this.breadth);
    }
}

let r1 = new Rectangle(10, 5);
r1.display();
r1.area();


class Account {
    constructor(accountNo) {
        this.accountNo = accountNo;
    }
}

class SavingsAccount extends Account {
    constructor(accountNo, balance) {
        super(accountNo);
        this.balance = balance;
    }

    display() {
        console.log(this.accountNo, this.balance);
    }
}

let a1 = new SavingsAccount(1001, 50000);
a1.display();


class Device {
    constructor(name) {
        this.name = name;
    }
}

class Mobile extends Device {
    constructor(name, model) {
        super(name);
        this.model = model;
    }
}

class SmartPhone extends Mobile {
    constructor(name, model, os) {
        super(name, model);
        this.os = os;
    }

    display() {
        console.log(this.name, this.model, this.os);
    }
}

let p1 = new SmartPhone("Mobile", "Galaxy", "Android");
p1.display();


class Area {
    calculate(type, a, b) {

        if (type == "square")
            console.log(4 * a);

        else if (type == "rectangle")
            console.log(2 * (a + b));

        else if (type == "circle")
            console.log(2 * Math.PI * a);
    }
}

let ar1 = new Area();

ar1.calculate("square", 5);
ar1.calculate("rectangle", 10, 5);
ar1.calculate("circle", 7);


class DrawShape {
    draw(shape) {
        console.log(`Drawing ${shape}`);
    }
}

let d1 = new DrawShape();

d1.draw("Circle");
d1.draw("Rectangle");
d1.draw("Triangle");
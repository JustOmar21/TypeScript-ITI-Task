// Task 1
let arrNum = [1, 2, 3];
// Task 2
let arrNumStr = ["Final", "Fantasy", 7, "Rebirth", "Out", 29, "Feb"];
console.log(arrNumStr);
// Task 3
let numBool = 1 == 1 ? 21 : true;
// Task 4
function twoFunc(a, b) {
    console.log("hi");
}
class Employee {
    id;
    name;
    username;
    email;
    address;
    constructor(id, name, username, email, address) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
    }
}
let emp = new Employee(1, "Omar Tarek", "JustOmar21", "tarekes68@gmail.com", { street: "street", suite: "suite", city: "city", zipcode: "code", geo: { lat: 321, lng: 213 } });
// Task 6
class Manager extends Employee {
    Display() {
        console.log(this.address);
    }
}
let manager = new Manager(1, "Omar Tarek", "JustOmar21", "tarekes68@gmail.com", { street: "street", suite: "suite", city: "city", zipcode: "code", geo: { lat: 321, lng: 213 } });
manager.Display();
class Account {
    AccNo;
    balance;
    constructor(AccNo, balance) {
        this.AccNo = AccNo;
        this.balance = balance;
    }
}
class currentAccount extends Account {
    openDate;
    interestRate;
    constructor(_AccNo, _balance, openDate, interestRate) {
        super(_AccNo, _balance);
        this.openDate = openDate;
        this.interestRate = interestRate;
    }
    addCustomer() {
        console.log("Customer added");
    }
    removeCustomer() {
        console.log("Customer removed");
    }
    debitAmount() {
        return this.balance;
    }
    creditAmount() {
        return this.balance;
    }
    getBalance() {
        return this.balance;
    }
}
class savingAccount extends Account {
    openDate;
    minBalance;
    constructor(_AccNo, _balance, openDate, minBalance) {
        super(_AccNo, _balance);
        this.openDate = openDate;
        this.minBalance = minBalance;
    }
    addCustomer() {
        console.log("Customer added");
    }
    removeCustomer() {
        console.log("Customer removed");
    }
    debitAmount() {
        return this.balance;
    }
    creditAmount() {
        return this.balance;
    }
    getBalance() {
        return this.balance;
    }
}

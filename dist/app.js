"use strict";
class Department {
    constructor(id, employee) {
        this.id = id;
        this.employee = employee;
    }
    describe() {
        console.log("Department : ", this.id);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(`Department ID : ${this.id} and Employees ${this.employee}`);
    }
}
const accounting = new Department("Accounting", ["d1"]);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map
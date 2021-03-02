class Department{

    constructor(private readonly id:string,private employee:string[]){
    
    }
    
    describe(){
        console.log("Department : ",this.id);
    }
    
    addEmployee(employee:string){
        this.employee.push(employee);
    }
    
    printEmployeeInformation(){
        console.log(this.employee.length);
        console.log(`Department ID : ${this.id} and Employees ${this.employee}`);    
    }
}
const accounting = new Department("Accounting",["d1"]);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employee[2] = 'Anna'
accounting.describe()

accounting.printEmployeeInformation();
const Employee = require("./Employee.js");



class Manager extends Employee{
    constructor(name, title, salary, boss, employees = []){
        super(name, title, salary, boss);
        this.employees = employees;
    }

    bonus(multiplier){
       const bonus = (this.salary + this.totalSubsalary()) * multiplier;
       return bonus;
    }

    totalSubsalary(){
        let total = 0;
        let totalSum = this.employees.map(function(employee){
            return total += employee.salary;    
        });
        return totalSum[totalSum.length - 1];
    }
}


const clifford = new Employee("Clifford", "TA", 90000, "Susie");
const lily = new Employee("Lily", "TA", 90000, "Susie");
const susie = new Manager("Susie", "TA Manager", 100000, "calvin", [lily, clifford]);
const calvin = new Manager("Calvin", "Director", 130000, "Hobbes", [susie, lily, clifford]);
const hobbes = new Manager("Hobbes", "Founder", 1000000, null, [calvin, susie, lily, clifford]);

console.log(hobbes.bonus(0.05)); // 50000
console.log(calvin.bonus(0.05)); // 6500
console.log(susie.bonus(0.05)); // 14000
console.log(lily.bonus(0.05)); // 4500
console.log(clifford.bonus(0.05)); // 4500

// console.log(calvin.totalSubsalary()); // 14000
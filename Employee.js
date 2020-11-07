
class Employee{
    constructor(name, title, salary, boss){
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = boss;
    }

    bonus(multiplier){
        const bonus = this.salary * multiplier;
        return bonus;
    }
}











module.exports = Employee;
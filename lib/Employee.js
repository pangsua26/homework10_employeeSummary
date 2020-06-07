// TODO: Write code to define and export the Employee class

// Employee class with identified properties and methods
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role || 'Employee'
        this.getName = function() {
            return this.name;
        }
        this.getID = function() {
            return this.id;
        }
        this.getEmail = function() {
            return this.email;
        }
        this.getRole = function() {
            return this.role;
        }
    }
}
// returns Employee
module.exports = Employee;
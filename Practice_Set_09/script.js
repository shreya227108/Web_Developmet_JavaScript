//Q1
// Base class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(`${this.name} is viewing website data.`);
  }
}

// Derived class
class Admin extends User {
  constructor(name, email) {
    super(name, email); // Call the parent constructor
  }

  editData() {
    console.log(`${this.name} is editing website data.`);
  }
}

// Example usage:
let user1 = new User("Shreya", "shreya@example.com");
user1.viewData();

let admin1 = new Admin("Admin Raj", "admin@example.com");
admin1.viewData();  // Inherited method
admin1.editData();  // Admin-specific method

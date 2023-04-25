class ShapeArea {
  constructor(type, params) {
    this.type = type;
    this.params = params
  }

  area() {
    if (this.type = 'square'){
      side = this.params['side'];
      return side*side;
    }
    else if(this.type = 'circle') {
      radias = this.params['radias'];
      return 3.14*radias*raidas;
    }
  }
}







class Employee {
  constructor(name, role) {
    this.name = name
    this.role = role;
  }

  isManager(){
    return this.role == 'manager'
  }
  
  calculateSalary() {
    let salary = 0;
    switch (this.role) {
      case 'manager':
        salary = 100000;
        break;
      case 'developer':
        salary = 80000;
        break;
      case 'designer':
        salary = 70000;
        break;
      default:
        salary = 50000;
        break;
    }
    return salary;
  }
}
















class InvoicePersistence {
  constructor(invoice) {
    this.invoice = invoice;
  }

  saveToFile(filename) {
    // Creates a file with given name and writes the invoice
  }

  saveToDatabase() {
    // Saves the invoice to database
  }
}



class Invoice {
  constructor(book, quantity, discountRate, taxRate) {
    this.book = book;
    this.quantity = quantity;
    this.discountRate = discountRate;
    this.taxRate = taxRate;
    this.total = this.calculateTotal();
  }
  
  calculateTotal() {
    let price = ((this.book.price - this.book.price * this.discountRate) * this.quantity);
    let priceWithTaxes = price * (1 + this.taxRate);

    return priceWithTaxes;
  }
}

class InvoicePrinter {
  constructor(invoice) {
    this.invoice = invoice;
  }
  
  print() {
    console.log(`${this.invoice.quantity}x ${this.invoice.book.name} ${this.invoice.book.price}`);
    console.log(`Discount Rate: ${this.invoice.discountRate}`);
    console.log(`Tax Rate: ${this.invoice.taxRate}`);
    console.log(`Total: ${this.invoice.total}`);
  }
}
class InvoicePersistence {
  constructor(invoice) {
    this.invoice = invoice;
  }
  
  saveToFile(filename) {
    // Creates a file with given name and writes the invoice
  }
  saveToDb(filename){
    
  }
}



class TaskList{
  constructor(){
    TaskList = []
  }

  addTask(Task){
    self.TaskList.push(Task)
  }
}

class Task {
  constructor(params) {
    this.name = params['name'];
    this.description = params['description'];
    this.subtaskList = params['subTask'];
  }

  calculateTaskCost() {
    let taskCost = 0;
    this.subtaskList.forEach(subTask => {
      taskCost += subTask.cost;
    });
    return taskCost;
  }
}

// Create a task object
const subTask1 = { name: 'Subtask 1', cost: 100 };
const subTask2 = { name: 'Subtask 2', cost: 200 };
const task = new Task({ name: 'Task 1', description: 'This is Task 1', subTask: [subTask1, subTask2] });
const taskList = new TaskList()
taskList.addTask(task)
console.log(task.calculateTaskCost());
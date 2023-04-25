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

  printInvoice() {
    console.log(`${this.quantity}x ${this.book.name} ${this.book.price}$`);
    console.log(`Discount Rate: ${this.discountRate}`);
    console.log(`Tax Rate: ${this.taxRate}`);
    console.log(`Total: ${this.total}`);
  }

  saveToFile(filename) {
    // Creates a file with given name and writes the invoice
  }
}





// Question 1
class Task {
  static taskList = [];
  
  constructor(params) {
    this.name = params['name'];
    this.description = params['description'];
    this.subtaskList = params['subTask'];
    Task.taskList.push(this);
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

console.log(task.calculateTaskCost());
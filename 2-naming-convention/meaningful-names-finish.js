// 1. self discriptive 
let age = 35;
let arr = ["START", "INPROGRESS", "FINISHED"]; 
let city = 'NYC';

// 2. Consistent names mostly java script uses camel case 
// Different case style

elapsedTimeInDays;              //  Camel case
RateOfInterest;                 //  Pascal case
start_time, end_time;           //  Snake case
user-route, request-container;  //  Kebab case

class Book {
    constructor(args){
        this.name = args['name']
        this.author = args["author"]
        this.mrpPrice = args["mrpPrice"]
        this.percentageDiscount = args["percentageDiscount"]
    }
}

//3. don't over define 
const book = {
  bookTitle: "Misery",
  bookId: 23423,
  bookAuthor: "Stephen King",
  bookISBN: "978-0-670-81364-3",
};

//4. use boolean and method/function naming convention
//like java, javascript uses is,are,has helping verbs as prefix in boolean
// and function/method has verb at start.
const page = {
    isJson: true,
    areXml: true,
    hasEncryption: true
    // remaining functions
}
function convertPageToHtml(page){
    if (page.hasEncryption) page.decript();
    if (page.isJson) return page.toHtml();
    if (page.areXml) return page.toHtml();  
}

//5. private and constants 

const DRINKING_AGE = 30 // constants

class User {
    constructor(args) {
      this.firstName = args["firstName"];
      this.lastName = args["lastName"];
      this.name = _getName();  //private names
      this.age = args["age"];
    }
    
    _getName() {
      return `${this.firstName} ${this.lastName}`;
    }
    canDrink(){
        if (this.age >= drinkingAge) return true;
        return false;
    }
  }
  
  let robin = new User('Robin', 'Wieruch', 25);
  let canRobinDrinks = robin.canDrink()

// class name should be in PascalCase and start with noun.
// private variable/method/function start with underscore.
// all constatnt should be in camel case
// A global JavaScript variable is written in camelCase if it is mutable.

//6. missleading names

let filteredBooks = books.filter(book => {["ram","shyam"]});




//7.There are two strategies of naming files in JavaScript: PascalCase(frontend, react) and kebab-case(backend) but use kabab case due OS processing.


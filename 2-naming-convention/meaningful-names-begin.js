// 1. 
let x = 5; //age of user
let arr = ["START", "INPROGRESS", "FINISHED"]; 
let ct = 'NYC';

// 2. 
class Book {
    constructor(args){
        this.name = args['name']
        this.author = args["author"]
        this.mrpPrice = args["mrp_price"]
        this.percentage_discount = args["percentage_discount"]
    }
}

// 3. 
const colorWithHexCode = Color("red", "#ff0000");

const book = {
  bookTitle: "Misery",
  bookId: 23423,
  bookAuthor: "Stephen King",
  bookISBN: "978-0-670-81364-3",
};

// 4. 
const page = {
    json: true,
    xml: true,
    encryption: true

}
function pageToHtml(page){
    if (page.encryption) page.decript();
    if (page.json) return page.toHtml();
    if (page.xml) return page.toHtml(); 
}

// 5.
const drinkingAge = 30

class User {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.name = getName(firstName, lastName);
      this.age = age;
    }
    
    getName(firstName, lastName) {
      return `${firstName} ${lastName}`;
    }
    canDrink(){
        if (this.age >= drinkingAge) return true;
        return false;
    }
  }
  
  let robin = new User('Robin', 'Wieruch', 25);
  let robinDrink = robin.canDrink()

// 6.

let allBooks = books.filter(book => {["ram","shyam"]});




  

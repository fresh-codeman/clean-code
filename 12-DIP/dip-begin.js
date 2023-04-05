// Bad Example
class DataAccessLayer {
  getAllUsers() {
    // Code to retrieve all users from the database
  }

  createUser(user) {
    // Code to create a new user in the database
  }
}

class UserService {
  constructor() {
    this.dataAccessLayer = new DataAccessLayer();
  }

  getAllUsers() {
    return this.dataAccessLayer.getAllUsers();
  }

  createUser(user) {
    return this.dataAccessLayer.createUser(user);
  }
}
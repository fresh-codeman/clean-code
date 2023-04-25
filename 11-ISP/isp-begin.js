class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log('Engine started');
  }

  stopEngine() {
    console.log('Engine stopped');
  }

  turnOnAC() {
    console.log('AC turned on');
  }

  turnOffAC() {
    console.log('AC turned off');
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }
}

class Motorbike extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }
}

function drive(vehicle) {
  vehicle.startEngine();
  vehicle.turnOnAC();
  vehicle.stopEngine();
}

const car1 = new Car('Honda', 'Civic', 2020);
const motorbike = new Motorbike('Harley Davidson', 'Softail', 2021);

drive(car1); 
drive(motorbike); 









class ParkingLot {
  constructor(capacity) {
    this.capacity = capacity;
    this.emptySpots = capacity;
  }

  parkCar() {
    if (this.emptySpots > 0) {
      this.emptySpots--;
    } else {
      throw new Error('No empty spots available');
    }
  }

  unparkCar() {
    if (this.emptySpots < this.capacity) {
      this.emptySpots++;
    } else {
      throw new Error('No cars parked in this parking lot');
    }
  }

  getCapacity() {
    return this.capacity;
  }

  calculateFee(car, hours) {
    throw new Error('calculateFee() method must be implemented by subclasses');
  }

  doPayment(car, amount) {
    throw new Error('doPayment() method must be implemented by subclasses');
  }
}

class Car {}

class HourlyParkingLot extends ParkingLot {
  constructor(capacity, hourlyRate) {
    super(capacity);
    this.hourlyRate = hourlyRate;
  }

  calculateFee(car, hours) {
    return this.hourlyRate * hours;
  }

  doPayment(car, amount) {
    console.log(`Payment of $${amount.toFixed(2)} received for car ${car}`);
  }
}

class FreeParking {

  calculateFee(car) {
    return 0;
  }

  doPayment(car) {
    throw new Error('Parking lot is free');
  }
}


const hourlyLot = new HourlyParkingLot(50, 5);
const car = new Car();

hourlyLot.parkCar();
hourlyLot.calculateFee(car, 2); // Returns 10
hourlyLot.doPayment(car, 10.5); // Outputs "Payment of $10.50 received for car [object Object]"
hourlyLot.unparkCar();


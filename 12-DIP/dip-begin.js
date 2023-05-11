class Store {
  constructor(user){
    this.stirpe = new Stirpe(user)
  }

  purchaseBike(quantity){
    this.stirpe.makePayment(200*quantity*100)
  }

  purchaseHelmet(quantity){
    this.stirpe.makePayment(15*quantity*100)
  }
}

class Stirpe{
  constructor(user){
    this.user = user
  }

  makePayment(amountInCents){
    console.log(`${this.user} made payment of $${amountInCents/100}`)
  }
}

class Paypal{
  makePayment(user, amountInCents){
    console.log(`${user} made payment of $${amountInCents/100}`)
  }
}
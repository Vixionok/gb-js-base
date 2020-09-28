'use strict'
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// -----------------------
// ES5
// -----------------------
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
};
const product1 = new Product('Продукт', 750);
product1.make25PercentDiscount();



// -----------------------
// ES6
// -----------------------
class ProductNew {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscountNew() {
    this.price = this.price - (this.price * 25 / 100);
  }
}
const product2 = new ProductNew('Товар', 750);
product2.make25PercentDiscountNew();



console.log(product1);
console.log(product2);
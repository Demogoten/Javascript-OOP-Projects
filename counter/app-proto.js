function getElement(selection) {
  const element = document.querySelector(selection);

  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Counter(element, value) {
  //   console.log(element, value);
  this.counter = element;
  this.value = value;

  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  //   console.log(this.resetBtn);
  this.valueDOM = element.querySelector(".value");
  this.valueDOM.textContent = this.value;

  //   bind this to all function
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  //   addeventlistener to every button
  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
  // it will creeate problems if we use "remove" method
  // this.increaseBtn.addEventListener("click", this.increase.bind(this));
}

Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement(".first-counter"), 101);
const secondCounter = new Counter(getElement(".second-counter"), 200);

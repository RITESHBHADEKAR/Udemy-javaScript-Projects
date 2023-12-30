function getelement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `please check ${selection} selector , no such element exists`
  );
}


class counter {
    constructor(element, value){
          this.counter = element;
          this.value = value;
          this.resetBtn = element.querySelector('.reset');
          this.increaseBtn = element.querySelector('.increase');
          this.decreaseBtn = element.querySelector('.decrease');
          this.valueDom = element.querySelector('.value');
          this.valueDom.textContent = this.value;

          //   bind this to all function
          this.increase = this.increase.bind(this);
          this.decrease = this.decrease.bind(this);
          this.reset = this.reset.bind(this);

          // this.increaseBtn.addEventListener('click', this.increase)
          this.increaseBtn.addEventListener('click', this.increase.bind(this));
          this.decreaseBtn.addEventListener('click', this.decrease);
          this.resetBtn.addEventListener('click', this.reset);
    }
    increase(){
          this.value++;
          this.valueDom.textContent = this.value;
    }
    decrease(){
          this.value--;
          this.valueDom.textContent = this.value;
    }
    reset(){
          this.value = 0;
          this.valueDom.textContent = this.value;
    }
}



















const firstCounter = new counter(getelement('.first-counter'), 100);
const secondCounter = new counter(getelement('.second-counter'), 200);

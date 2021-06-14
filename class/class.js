function Person(name, age) {
  this.name = name; // public
  let _age = age; // private

  this.sayHi = function () {
    console.log(`Hi My name is ${this.name}. I'm ${_age}`);
  };
}

const me = new Person('Lee', 20);

me.sayHi();

console.log(me.name); // lee
console.log(me._age); // undefined

const you = new Person('Kim', 30);

you.sayHi();

console.log(you.name); // kim
console.log(you._age); // undefined

/*
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
*/

const Person = (function () {
  let _age = 0;

  function Person(name, age) {
    this.name = name;
    _age = age;
  }

  Person.prototype.sayHi = function () {
    console.log(`name: ${this.name}, age: ${_age}`);
  };

  return Person;
})();

const user = new Person('Song', 40);

console.log(user.sayHi());

const you = new Person('Kim', 20);
console.log(you.sayHi());

console.log(user.sayHi());

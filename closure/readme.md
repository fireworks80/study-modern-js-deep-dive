# 24.5 캡슐화와 정보 은닉

## 캡슐화

객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것.
캡슐화는 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데 이를 정보 은닉이라고 함.

## 정보은닉

외부에 공개할 필요가 없는 구현의 일부를 외부에 공개되지 않도록 감추어 적절치 못한 겁근으로 부터 객체의 상태가 변경되는 것을 방지해
정보를 보호, 객체 간의 상호 의존성(결합도)을 낮추는 효과가 있다.

```
function Person(name, age) {
  this.name = name; // public
  let _age = age; // private

  this.sayHi = function() {
    console.log(`name: ${this.name}, age: ${_age}`);
  };
}

const user = new Person('Song', 40);

console.log(user.name); // Song
console.log(user._age); // undefined
```

this.sayHi메서드는 인스턴스가 생성될 때마다 중복으로 생성되므로 prototype메서드로 변경

```
Person.prototype.sayHi = function() {
  console.log(`name: ${this.name}, age: ${_age}`);
};

하지만 _age를 참조할 수 없는 문제가 발생 한다.
```

\*\* 개선

```
const Person = (function() {
  let _age = 0; // private

  function Person(name, age) {
    this.name = name;
    _age = age;
  }

  Person.prototype.sayHi = function() {
    console.log(`name: ${this.name}, age: ${_age}`);
  };

  return Person;

}());

const user = new Person('Song', 40);

하지만 인스턴스가 여러개 생성된다면 _age변수의 상태가 유지되지 않는다.
```

Person.prototype.sayHi 메서드는 한번만 생성되는 클로저 이므로 이 메서드는 자신이 속한 즉시실행 함수의 렉시컬 스코프를 기억한다.
이 메서드의 상위 스코프는 어떤 인스턴스가 생성되어 호출하더라도 동일한 스코프를 사용한다.
그러므로 \_age변수는 유지 되지 않는다

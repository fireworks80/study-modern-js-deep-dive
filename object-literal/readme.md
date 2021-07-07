# 겍체

## 객체란?

: primitive 값을 제외한 모든 것(함수, 배열, 정규표현식 등)이 객체
값은 변수(식별자) 일 수도 있다.

```
{키: 값}
```

## 생성방법

- {}
- Object.create() // Object.create(null)은 **proto** 가 없다.
- class

## 프로퍼티

: 객체의 상태를 나타내는 값
각각의 프로퍼티는 쉼표(,)로 구분한다.

### 프로퍼티 키

: 프로퍼티 값에 접근 할 수 있는 식별자 이므로 식별자 네이밍 규칙을 준수 할 수도 아닐 수도 있다.

- 식별자 네이밍 규칙을 준수한 키는 '',"" 없이 사용가능
- 식별자 네이밍 규칙을 준수 하지 않은 키는 '', ""를 사용해서

#### 식별자 네이밍 규칙

- 특수문자를 제외한 문자, 숫자, 언더스코어(\_), 달려기호($)를 포함 할 수 있다.
- 특수문자를 제외한 문자, 숫자, 언더스코어(\_), 달러기호($)로 시작해야 한다. (숫자로 시작하면 안된다.)
- 예약어는 식별자로 사용할 수 없다.

```
{
  firtName: 'hong',
  'last-name': 'gildong'
}
```

### 프로퍼티 추가 방법

```
1. {
  firtName: 'hong',
  'last-name': 'gildong',
  '': 'empty'
}

2.
const obj = {};
obj.key = 'hello';

3.
const obj = {};
obj['last-name'] = 'bello';

4.
const obj = {};
const key = 'this is key';

obj[key] = 'test';


5.
{
  name: 'hello',
  name: 'bello'
}

# key가 중복되어도 오류가 발생 하지 않는다.
# 뒤의 카:값 이 먼저 선언한 키: 값을 덮어 쓴다.
```

## 메서드

: 프로퍼티를 참조하거나 조작할 수 있는 동작

### 작성법

```
{
  메서드명: function() {}
}

{
  메서드명() {}
}

{
  메서드명: () => {}
}
# this를 사용 할 수 없으므로 메서드로 사용할 함수를 넣을때는 arrow function을 사용하지 않는다.
```

### 참조

- 점(.)을 사용하여 참조
- 대괄호 ([])를 사용하여 참조

```
const obj = {
  name: 'cabot';
  getName() {
    #  this는 해당 메서드를 호출한 주체를 가리킨다.
    return this.name;
  }
};

#점
#프로퍼티 참조:  obj.name;
#메서드 호출: obj.getName();
#객체에 존재하지 않은 프로퍼티를 참조 하려 하면 'undefined'를 반환 한다.

#대괄호
#프로퍼티: obj[name];
#메소드: obj['getName']()
#대괄호로 참조 할때는 []안에서 키를 ''로 감싸야 한다.
#''로 감싸지 않으면 프로퍼티 키가 아닌 식별자로 인식하기 때문에 'ReferenceError'를 일으킨다.
#메서드 호출시 키에 해당하는 메서드가 없는경유도 'ReferenceError'를 일으킨다. 'ReferenceError'를 일으키지 않으려면 옵셔널 체이닝 연산자(?.)로 호출하면
에러 발생하지 않고 'undefined'를 반환한다 ex) obj['key']?.()
```

### 프로퍼티 삭제

- delete 연산자 사용

```
const obj = {
  name: 'hell'
};

delete obj.name;
```

## es6에서 추가된 확장 기능

### 프로퍼티 축약

프로퍼티 값이 식별자 일 때
프로퍼티 키와 값의 이름이 같을 경우
키 생략 가능

```
before
{
  x: x,
  y: y
}

es6+
{
 x,
 y
}
```

### 계산된 프로퍼티

: 문자열 또는 문자열 타입으로 변환 할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성 가능하다.

```
# before

const prefix = 'prop';
let i = 0;

const obj = {};

obj[prefix + '-' + ++i] = i;
# 객체 생성 후 대괄호 표기법으로 동적 생성 해야 됨

# es6+

const prefix = 'prop';
let i = 0;

const obj = {
  [prefix + '-' + ++i]: i
};

리터럴 객체 내부에서도 동적 키를 생성 가능
```

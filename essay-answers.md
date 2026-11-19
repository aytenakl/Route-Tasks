# Essay Answers

### 1. forEach and for...of

`forEach()` is an array method that runs a function for each element in an array. `for...of` is a loop that works with iterable objects like arrays and strings. The main difference is that `for...of` allows us to use `break` and `continue`, while `forEach()` does not.

```javascript
const numbers = [1, 2, 3];

numbers.forEach(num => console.log(num));

for (const num of numbers) {
    console.log(num);
}
```

### 2. Hoisting and TDZ

Hoisting means that JavaScript processes declarations before executing the code. For example, we can call a function declaration before writing it in the code.

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

The Temporal Dead Zone (TDZ) is the period before a `let` or `const` variable is initialized. Trying to access it during this period causes a `ReferenceError`.

```javascript
console.log(age);
let age = 20;
```

### 3. == and ===

The `==` operator compares values after converting their types if necessary. The `===` operator compares both the value and the type without converting them.

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

I prefer using `===` because it gives more predictable results.

### 4. try-catch

`try...catch` is used to handle errors. The `try` block contains the code that might cause an error, while the `catch` block handles the error if it occurs.

It is also useful with asynchronous code that uses `async/await`, because an awaited Promise may fail.

```javascript
async function getData() {
    try {
        const response = await fetch("https://example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("An error occurred:", error);
    }
}
```

This helps handle errors instead of letting them stop the normal execution unexpectedly.

### 5. Type Conversion and Coercion

Type conversion happens when we explicitly change a value from one type to another using methods like `Number()` or `String()`.

```javascript
const value = "123";
const number = Number(value);

console.log(number); // 123
```

Type coercion happens when JavaScript automatically converts a value during an operation.

```javascript
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
```

The main difference is that type conversion is done manually, while type coercion happens automatically in JavaScript.
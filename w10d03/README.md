# Intro to TypeScript

### To Do
* [x] What is TypeScript?
* [x] TypeScript CLI
* [x] Primitive Types
* [x] Arrays
* [x] Objects
* [x] Functions and Methods
* [x] Duck Typing
* [x] Generics

### What is TypeScript?
* a superset of JavaScript
* adds static typing
* .ts => typescript compiler => .js


```ts
function processInput(input: string): void;
function processInput(input: number): void;
function processInput(input: string | number): void {
  if (typeof input === 'string') {
    // Process string input
    console.log('String input:', input);
  } else {
    // Process number input
    console.log('Number input:', input);
  }
}
```



















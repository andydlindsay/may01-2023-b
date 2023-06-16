# W07D05 - React Review

### To Do
* [x] Building Components
* [x] Props
* [x] Immutable Patterns
* [x] Q and A

### Not so smart todo list

App - state: todos, completedTodos
  - Header - props: todos
  - TodoList - props: todos, completedTodos
    - TodoListItem - props: todo, isComplete
  - NewTodoForm - props: setTodos, state: newTodo


```js
const main = () => {
  const user = {};

  const secondary = () => {
    console.log(user);
  };

  const another = () => {
    console.log(user);
  };

};
```

todos = [
  {
    id: number;
    task: string;
  }
];



```js
const obj = {
  abc: {
    id: 'abc'
  },
  def: {},
  ghi: {}
};

for (const key in myObj) {}
for (const key of Object.keys(myObj)) {}

Object.values(obj).map()
Object.entries(obj);

[
  ['abc', {}], 
  ['def', {}], 
  ['ghi', {}]
]
```

















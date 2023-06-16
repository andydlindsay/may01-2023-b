/*
Props:
  todos: array;
*/

import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const mappedTodos = props.todos.map((todo) => {
    return (
      <TodoListItem
        key={todo.id} 
        todo={todo}
        toggleComplete={props.toggleComplete}
        isComplete={props.completedTodos.includes(todo)}
      />
    );
  });

  return (
    <div>
      { mappedTodos }
    </div>
  );
};

export default TodoList;

TodoList.defaultProps = {
  todos: [
    {
      id: 'aaa',
      task: 'water the lawn'
    },
    {
      id: 'bbb',
      task: 'go grocery shopping'
    }
  ]
};

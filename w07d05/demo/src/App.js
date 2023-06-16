import './App.css';
import {useState} from 'react';

// import TodoListItem from './components/TodoListItem';
import TodoList from './components/TodoList';
import Header from './components/Header';
import NewTodoForm from './components/NewTodoForm';

const initialTodos = [
  {
    id: 'xyz',
    task: 'fold laundry'
  },
  {
    id: 'jqe',
    task: 'finish PhotoLabs'
  },
  {
    id: 'das',
    task: 'Recycling'
  },
  {
    id: 'asd',
    task: 'Vacuum'
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addNewTodo = (task) => {
    const id = Math.random().toString(36).substring(2, 5);

    const newTodo = {
      id,
      task
    };

    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (todo) => {
    // check if todo exists inside completedTodos
    if (completedTodos.includes(todo)) {
      // if they want to mark it incomplete
      const filtered = completedTodos.filter((completedTodo) => completedTodo !== todo);
      return setCompletedTodos(filtered);
    }

    // if they want to mark it complete
    setCompletedTodos([...completedTodos, todo]);
  };

  return (
    <div className="App">
      <Header numTodos={todos.length} numCompletes={completedTodos.length}/>
      <NewTodoForm addNewTodo={addNewTodo} />
      <TodoList
        todos={todos} 
        toggleComplete={toggleComplete} 
        completedTodos={completedTodos}
      />
    </div>
  );
};

export default App;

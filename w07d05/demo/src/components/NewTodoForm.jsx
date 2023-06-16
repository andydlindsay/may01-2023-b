import {useState} from 'react';

const NewTodoForm = (props) => {
  const [task, setTask] = useState('');

  const handleClick = () => {
    props.addNewTodo(task);
  };

  return (
    <div>
      <h2>Create a new todo!</h2>

      <div>
        <label>New task:</label>
        <input 
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button onClick={handleClick}>Add!</button>
      </div>
    </div>
  );
};

export default NewTodoForm;

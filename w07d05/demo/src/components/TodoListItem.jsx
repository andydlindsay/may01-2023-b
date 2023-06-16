/*
Props:
  - isComplete
  - todo
    - id: number
    - task: string
*/

const TodoListItem = (props) => {
  const clickHandler = () => {
    // call a function from the parent
    props.toggleComplete(props.todo);
  };

  return (
    <div onClick={clickHandler}>
      <p>{props.todo.task} ({props.todo.id}) { props.isComplete ? '✅' : '🟩' }</p>
    </div>
  );
};

export default TodoListItem;

TodoListItem.defaultProps = {
  id: 'abc',
  task: 'Do the dishes'
};

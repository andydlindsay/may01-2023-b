/*
Props:
  numTodos: number;
  numCompletes: number;
*/

import '../styles/Header.css';

const Header = (props) => {
  const className = props.numCompletes === props.numTodos ? 'all-done' : null;

  return (
    <div>
      <h2 className={className}>The Not-so-smart Todo List! {props.numCompletes} / {props.numTodos} complete</h2>
    </div>
  );
};

export default Header;

Header.defaultProps = {
  numTodos: 10,
  numCompletes: 2
};

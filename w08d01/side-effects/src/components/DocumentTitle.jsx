import {useEffect, useState} from 'react';

const DocumentTitle = () => {
  const [counter, setCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('updating the document title');
    document.title = `the counter is ${counter}`;
  }, [counter, searchTerm]);
   
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('the interval has fired!', counter);
    }, 3000);

    const cleanup = () => {
      console.log('clearing the interval');
      clearInterval(intervalId);
    };

    return cleanup;
  });

  return (
    <div>
      <h2>DocumentTitle Component</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Click me!</button>

      <div>
        <label>Search Term:</label>
        <input 
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <h2>Search Term: {searchTerm}</h2>
      </div>
    </div>
  );
};

export default DocumentTitle;

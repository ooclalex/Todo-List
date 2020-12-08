import './App.css';
import TodoGeneratorContainer from './container/TodoGeneratorContainer';
import TodoItemGroupContainer from './container/TodoGroupContainer';

function App() {
  const done = false;
  const text = "test text";
  const todoItem = {done, text};
  return (
    <div className="App">
      <header className="App-header">
        <TodoItemGroupContainer todoItem={todoItem} />
        <TodoGeneratorContainer />
      </header>
    </div>
  );
}

export default App;

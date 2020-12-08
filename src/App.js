import logo from './logo.svg';
import TodoItem from './component/TodoItem';
import './App.css';
import TodoGeneratorContainer from './container/TodoGeneratorContainer';

function App() {
  const status = "test status";
  const message = "test message";
  const todoItem = {status, message};
  return (
    <div className="App">
      <header className="App-header">
        <TodoItem todoItem={todoItem} />
        <TodoGeneratorContainer />
      </header>
    </div>
  );
}

export default App;

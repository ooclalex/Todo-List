import logo from './logo.svg';
import TodoItem from './component/TodoItem';
import './App.css';
import TodoGeneratorContainer from './container/TodoGeneratorContainer';
import TodoGroup from './component/TodoGroup';
import TodoItemGroupContainer from './container/TodoGroupContainer';

function App() {
  const status = "test status";
  const message = "test message";
  const todoItem = {status, message};
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

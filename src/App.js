import './App.css';
import TodoList from './component/TodoList';
import DoneList from './component/DoneList';
import { BrowserRouter, Link, NavLink, Route } from "react-router-dom";
import DoneListContainer from './container/DoneListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BrowserRouter>
          <ul>
            <li>
              <NavLink></NavLink>
            </li>
            <li>
              <Link to="/">go to list page</Link>
            </li>
          </ul>
          <Route path="/done" component={{}}></Route>
        </BrowserRouter> */}
        <TodoList />
        <DoneListContainer />
      </header>
    </div>
  );
}

export default App;

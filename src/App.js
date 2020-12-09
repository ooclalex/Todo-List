import './App.css';
import TodoList from './component/TodoList';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import DoneListContainer from './container/DoneListContainer';
import NotFound from './component/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/done">go to done page</Link>
            </li>
            <li>
              <Link to="/">go to todo page</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/done" component={DoneListContainer}></Route>
            <Route exact path="/" component={TodoList}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

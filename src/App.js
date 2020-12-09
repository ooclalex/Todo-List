import './App.css';
import TodoList from './component/TodoList';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import DoneListContainer from './container/DoneListContainer';
import NotFound from './component/NotFound';
import Navigation from './component/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body className="App-body">
      <BrowserRouter>
        <Navigation />
          <Switch>
            <Route exact path="/done" component={DoneListContainer}></Route>
            <Route exact path="/" component={TodoList}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;

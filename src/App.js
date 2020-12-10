import "./App.css";
import TodoList from "./component/TodoList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DoneListContainer from "./container/DoneListContainer";
import NotFound from "./component/NotFound";
import Navigation from "./component/Navigation";
import TagList from "./component/TagList";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/done" component={DoneListContainer}></Route>
            <Route exact path="/tag" component={TagList}></Route>
            <Route exact path="/" component={TodoList}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./containers/home.js";
import BookDetail from "./containers/bookDetail.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={BookDetail} />
        </Switch>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow
} from "./streams";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <React.Fragment>
            <Header />
            <Switch>
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route
                path="/streams/delete/:id"
                exact
                component={StreamDelete}
              />
              <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;

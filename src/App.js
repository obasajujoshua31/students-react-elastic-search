import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Provider from "./store/store";

function App() {
  const renderComponents = routes.map(route => (
    <Route
      component={route.component}
      exact={route.exact}
      path={route.path}
    ></Route>
  ));
  return (
    <div className="App">
      <Provider>
        <Router>
          <Switch>{renderComponents}</Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

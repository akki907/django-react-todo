import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Notifications from "react-notify-toast";
const Dashboard = lazy(() => import("./components/layout/Dashboard"));
const UpdateTodo = lazy(() => import("./components/layout/UpdateTodo"));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>...Loading</div>}>
        <Router>
          <div className="App">
            <Navbar />
            <Notifications />
            <div className="parent-container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/todo/:id" component={UpdateTodo} />
              </Switch>
            </div>
          </div>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;

import React, { Component, Fragment } from "react";
import Header from "./components/layout/Header";
import Dashboard from "./components/todo/Dashboard";
import store from "./store";
import { Provider } from "react-redux";

import Notifications from 'react-notify-toast';



export class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Fragment>
            <Header />
            <Notifications />
            <Dashboard />
          </Fragment>
      </Provider>
    );
  }
}

export default App;

import React, { createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Article from "./components/Article";
import Form from "./components/Form";

export const SuperContext = createContext(1);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <SuperContext.Provider value={3}>
          <Switch>
            <Route path="/article">
              <Article>my super content</Article>
            </Route>
            <Route path="/vm">
              <Form />
            </Route>
          </Switch>
        </SuperContext.Provider>
      </div>
    </Router>
  );
}

export default App;

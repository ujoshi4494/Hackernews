import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Fragment>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/' component={News} />
          </Switch>
          <News />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;

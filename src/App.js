import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardComp from "./components/CardComp";
import NewVideo from "./components/NewVideo";
import Editor from "./components/Editor";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/e-hire-fe/home' exact>
            <CardComp />
          </Route>
          <Route path='/e-hire-fe/:id' exact>
            <div className='all-content video-editor'>
              <div className='main-column1 editorr'>
                <Editor />
              </div>
              <div className='main-column2 newvideo'>
                <NewVideo />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

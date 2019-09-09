import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home.component";
import About from "./components/profile.component";

import Profile from "./update_components/profile.component";
import WorksList from "./update_components/works-list.component";
import WorksEdit from "./update_components/works-edit.component";
import WorksCreate from "./update_components/works-create.component";
import BlogsList from "./update_components/blogs-list.component";
import BlogsEdit from "./update_components/blogs-edit.component";
import BlogsCreate from "./update_components/blogs-create.component";

function App() {
  return (
    <Router>
      <div className="">
        <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/blog" exact render={() => <h1>Coming Soon!</h1>}/>

            <Route path="/update" exact component={Profile} />
            <Route path="/update/works" exact component={WorksList} />
            <Route path="/update/works/edit/:id" exact component={WorksEdit} />
            <Route path="/update/works/create" exact component={WorksCreate} />
            <Route path="/update/blogs" exact component={BlogsList} />
            <Route path="/update/blogs/edit/:id" exact component={BlogsEdit} />
            <Route path="/update/blogs/create" exact component={BlogsCreate} />

            <Route render={() => <h1>Error: Link Not Found</h1>} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;

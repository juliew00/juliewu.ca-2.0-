import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./update_components/navbar.component";
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
      <div className="container">
        <Navbar />
        <br />
        <Route path="/update" exact component={Profile} />
        <Route path="/update/works" exact component={WorksList} />
        <Route path="/update/works/edit/:id" exact component={WorksEdit} />
        <Route path="/update/works/create" exact component={WorksCreate} />
        <Route path="/update/blogs" exact component={BlogsList} />
        <Route path="/update/blogs/edit/:id" exact component={BlogsEdit} />
        <Route path="/update/blogs/create" exact component={BlogsCreate} />
      </div>
    </Router>
  );
}

export default App;

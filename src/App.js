import React from 'react'
import './App.css';
import { useState } from 'react';
import { AppStyle, MainContent, Content, Sidebar, NavBTN } from './Styles/layout'
import { Route, Switch } from 'react-router-dom';

import PrivateRoutes from './Component/PrivateRoutes';
import NavBar from './Component/NavBar'

import { HomePage } from './Pages/HomePage';
import { AboutPage } from './Pages/AboutPage';
import { ProjectsPage } from './Pages/ProjectsPage';
import { BlogsPage } from './Pages/BlogsPage';
import { BlogPostPage } from './Pages/BlogPostPage';
import { Page404 } from './Pages/Page404';
import { LoginPage } from './Pages/LoginPage';
import { DashboardPage } from './Pages/AuthenticatedPages/DashboardPage';
import { UnpubBlogs } from './Pages/AuthenticatedPages/UnpubBlogs';


function App() {
  const [toggle, setToggle] = useState(false);

  const navClick = () =>{
    setToggle(!toggle)
  }

  return (
    <AppStyle className="App">
      <Sidebar>
        <NavBar />
      </Sidebar>
      <NavBTN onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </NavBTN>
      <MainContent>
        <Content>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/projects" component={ProjectsPage}/>
            <Route exact path="/blog" component={BlogsPage}/>
            <Route exact path="/blog-post/:id" component={BlogPostPage}/>
            <Route exact path="/admin" component={LoginPage}/>
            {/* TODO: make these private routes */}
            <PrivateRoutes exact path="/dashboard" component={DashboardPage}/>
            <PrivateRoutes exact path="/unpublished-blogs" component={UnpubBlogs}/>
            <Route component={Page404}/>
          </Switch>
        </Content>
      </MainContent>
    </AppStyle>
  );
}

export default App;

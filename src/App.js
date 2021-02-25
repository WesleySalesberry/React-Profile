import './App.css';
import { useState } from 'react';
import { AppStyle, MainContent, Content, Sidebar, NavBTN } from './Styles/layout'
import { Route, Switch } from 'react-router-dom';
import {NavBar} from './Component/NavBar'
import { HomePage } from './Pages/HomePage';
import { AboutPage } from './Pages/AboutPage';
import { ProjectsPage } from './Pages/ProjectsPage';




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
          </Switch>
        </Content>
      </MainContent>
    </AppStyle>
  );
}

export default App;

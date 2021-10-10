import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import MainPage from './components/Mainpage'
import Skills from './components/Skills'
import NavBar from './components/NavBar'
import ProjectsPage from './components/Projects'

function App() {
  return (
    <div className="App">
    <div className="body">
      <div className="header">
      <NavBar/>
      </div>
      <Switch>
        <Route exact path={"/"} component={MainPage} />
        <Route exact path={"/skills"} component={Skills} />
        <Route path={"/projects"} component={ProjectsPage} />
      </Switch>
    </div>
    </div>
  );
}

export default App;

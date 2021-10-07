import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import MainPage from './components/Mainpage'
import Skills from './components/Skills'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <div className="header">
      <NavBar/>
      </div>
      <Switch>
        <Route exact path={"/"} component={MainPage} />
        <Route exact path={"/skills"} component={Skills} />
      </Switch>
    </div>
  );
}

export default App;

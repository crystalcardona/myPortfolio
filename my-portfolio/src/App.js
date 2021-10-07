import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import MainPage from './components/Mainpage'
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={MainPage} />
        <Route exact path={"/skills"} component={Skills} />
      </Switch>
    </div>
  );
}

export default App;

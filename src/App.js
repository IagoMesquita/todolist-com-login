import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import TaskList from './pages/lista-tarefas/TaskList.js'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/lista-de-tarefas" component={TaskList} />
      </Switch>
    </div>
  );
}

export default App;

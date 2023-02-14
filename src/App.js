import { Switch,Link,Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/' component={Login}>
      </Route>
      </Switch>
    </div>
  );
}

export default App;

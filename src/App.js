import { Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Chats from './components/Chats';


import AuthContextProvider from './contexts/AuthContextProvider';

function App() {
  return (
    <div className="App">
    <AuthContextProvider>
          <Switch>
          <Route path='/chats' component={Chats}/>
      <Route path='/' component={Login}/>
      </Switch>
    </AuthContextProvider>
    </div>
  );
}

export default App;

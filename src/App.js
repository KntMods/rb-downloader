import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import Download from './pages/Download';
import Profile from './pages/Profile';


const App = () => {
	
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/download" exact>
          <Download/>
        </Route>
        <Route path="/profile" exact>
          <Profile/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Login'
import MainApp from './MainApp'
import React from 'react'

function App() {


  return (
    <BrowserRouter>
      {/* essentially a switch statement that chooses the component to render based on the path */}
      <Switch>
        <Route exact path="/" render={() => <Login/>} />
        <Route path="/mainApp" render={() => <MainApp />} />
      </Switch>
    </BrowserRouter>
  );
  
   
}

//export the App component
export default App;
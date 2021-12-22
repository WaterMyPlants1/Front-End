import React, {Switch} from "react";
import {Route} from 'react-router-dom';

import { PrivateRoute } from "./components/PrivateRoute";
import PlantsList from "./components/PlantsList";
import Plant from "./components/plant";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
    return (
      <div className='App'>
        <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <PrivateRoute path='/plant'>
          <Plant />
        </PrivateRoute>
        <PrivateRoute path='/plant/list'>
          <PlantsList />
        </PrivateRoute>
        </Switch>
      </div>
    );
  }
  
  export default App;
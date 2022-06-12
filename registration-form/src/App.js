import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

// components
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />      
      <Route path="/signup" component={SignUp} />
      <Redirect from="/" to="signup"/>      
    </Switch>
  );
};

export default App;
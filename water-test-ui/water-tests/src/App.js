import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import WaterTest from "./Components/WaterTest";
import "./App.css";
import useToken from "./Middleware/useToken";

const App = () => {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
        <Route exact path="/seekBoiler">
          <WaterTest />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

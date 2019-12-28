import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainScreen from "./Screens/MainScreen";

const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={MainScreen} />
    <Redirect path="*" to="/" />
  </Switch>
);
export default Router;

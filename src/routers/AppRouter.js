import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import MainPage from "../components/MainPage";
import ContactsPage from "../components/ContactsPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/contacts" component={ContactsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

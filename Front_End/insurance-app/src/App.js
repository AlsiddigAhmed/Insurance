import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as comps from "./Components";

import { PrivateRoutes } from "./Config/PrivateRoutes";

import store from "./Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <PrivateRoutes exact path="/user/:name" component={comps.UserHome} />
          <PrivateRoutes
            exact
            path="/update_gig/:id"
            component={comps.UpdateGig}
          />
          <PrivateRoutes
            exact
            path="/inbox/:name"
            component={comps.ContactMessages}
          />
          <PrivateRoutes
            exact
            path="/profile/:name/:id"
            component={comps.Profile}
          />
          <PrivateRoutes
            exact
            path="/profile/:name"
            component={comps.VisitedProfile}
          />
          <PrivateRoutes
            exact
            path="/gig_management/:name"
            component={comps.GigMng}
          />
          <PrivateRoutes
            exact
            path="/requests/:name"
            component={comps.Requests}
          />
          <PrivateRoutes exact path="/ongoing" component={comps.Ongoing} />
          <PrivateRoutes
            exact
            path="/create_gig/"
            component={comps.CreateGig}
          />
          <PrivateRoutes
            exact
            path="/gig_profile/"
            component={comps.GigProfile}
          />
          <PrivateRoutes
            exact
            path="/insurance/:name"
            component={comps.Insurance}
          />
          <Route exact path="/" component={comps.Home} />
          <Route
            exact
            path="/reset-password/:digit"
            component={comps.ResetPassword}
          />
          <Route exact path="/login" component={comps.Login} />
          <Route
            exact
            path="/forget-password"
            component={comps.ForgetPassword}
          />
          <Route exact path="/signup" component={comps.Signup} />
          <PrivateRoutes exact path="/*" component={comps.UserHome} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../../src/app/pages/layout";
import  { Workflow }  from './modules/Workflow/Workflow';
import { DashboardPage } from "./pages/dashBoard/DashboardPage";



export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <Route path="/workflow" component={Workflow} />
        <Redirect to="error/error-v6" />
      </Switch>
    </Suspense>
  );
}

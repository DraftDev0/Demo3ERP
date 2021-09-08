import React,{ Suspense } from "react";
import { Redirect,Switch } from "react-router-dom";
import { DashBoardWorkFlow } from "../../components/WorkFlow/DashBoardWorkFlow";
import { Create } from "../../components/WorkFlow/Create";
import { LayoutSplashScreen, ContentRoute } from "../../pages/layout";

//Main page for Workflow
export function Workflow() {
    return (
        <Suspense fallback={<LayoutSplashScreen />}>
        <Switch>
            {/* from base =>  /workflow/create  , /workflow/edit */}
            <Redirect
                exact={true}
                from="/workflow"
                to="/workflow/dashBoardworkFlow"
                />
                <ContentRoute path="/workflow/dashBoardworkFlow" component={DashBoardWorkFlow} />
                <ContentRoute exact path="/workflow/create" component={Create} />
        </Switch>
        </Suspense>
    );
  }
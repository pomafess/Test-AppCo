import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from "./shared/loader"

const MainPage = lazy(() => import('./pages/MainPage'));
const UsersPage = lazy(() => import('./pages/UsersPage'));
const OneUserPage = lazy(() => import('./pages/OneUserPage'));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const Routes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/users" exact component={UsersPage} />
                <Route path="/users/:id" exact component={OneUserPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Suspense>
    )
};

export default Routes;
 

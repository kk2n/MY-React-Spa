import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Bundle from "./Bundle";
import Loading from "components/Loading/Loading";

import Home from "bundle-loader?lazy&name=home!pages/Home/Home";
import NotFound from "bundle-loader?lazy&name=notFound!pages/NotFound/NotFound";
import ErrorPage from "bundle-loader?lazy&name=notFound!pages/Home/Error";
import User from "bundle-loader?lazy&name=User!pages/UserInfo/UserInfo";

//Page


const createComponent = component => () => (
    <Bundle load={component}>
        {Component => (Component ? <Component /> : <Loading />)}
    </Bundle>
);

export default () => (
    <Switch>
        {/* 首页============================================ */}
        <Route exact path="/" component={createComponent(Home)} />
        <Route path="/user" component={createComponent(User)} />

        {/* 未找到页面============================================ */}
        <Route path="/error" component={createComponent(ErrorPage)} />
        {/* 未找到页面============================================ */}
        <Route component={createComponent(NotFound)} />
    </Switch>
);

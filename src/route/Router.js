/*
 *@description: Router Config
 *@author: Tony
 *@date: 2022-04-04 10:16:41
 *@version: V1.0.0
*/
import React, { Fragment } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { PrivateRoute } from "components/route/Index";
import { LoginPage } from "pages/LoginPage";
import { MainPage } from "pages/MainPage";

export default function RouterConfig() {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<MainPage />} />
                    </Route>
                    <Route path="/login" element={<LoginPage />}>
                    </Route>
                </Routes>
            </Fragment>
        </Router>
    )
};

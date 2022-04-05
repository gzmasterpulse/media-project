/*
 *@description: Define Private Route
 *@author: Tony
 *@date: 2022-04-04 22:04:32
 *@version: V1.0.0
*/
import React from "react";
import {Outlet,Navigate,useLocation} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authAtom } from "state/Auth";

function PrivateRoute(){
    const auth=useRecoilValue(authAtom);//Get auth state
    const location=useLocation();//Location state
    return auth?<Outlet/>:<Navigate to="/login" state={{from:location}}></Navigate>
}

export {PrivateRoute};
/*
 *@description: User Auth State
 *@author: Tony
 *@date: 2022-04-04 21:34:31
 *@version: V1.0.0
*/

import { atom } from "recoil";
const authAtom=atom({
    key:"auth",
    default:JSON.parse(localStorage.getItem("user"))
});
export {authAtom};
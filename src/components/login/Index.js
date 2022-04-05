/*
 *@description: Login Compontent
 *@author: Tony
 *@date: 2022-04-04 09:58:36
 *@version: V1.0.0
*/
import React, { useState } from "react";
import UserIcon from "assets/username-icon.png"
import PwdIcon from "assets/password-icon.png";
import { useUserActions } from "hooks/UserAction";
function Login(props) {
    const [userName, setUserName] = useState("");//set username default ''
    const [passWord, setPassword] = useState("");//set password default ''
    const userActions = useUserActions();//get user hook
    /*
     *@description:Username or Password input change
     *@author: Tony
     *@date: 2022-04-05 21:27:59
     *@variable1: event
    */
    const handleChange = (e) => {
        const name = e.target.name;
        switch (name) {
            case "username":
                setUserName(e.target.value);
                break;
            case "pwd":
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    };
    /*
     *@description:User login submit
     *@author: Tony
     *@date: 2022-04-05 21:28:46
     *@variable1: event
    */
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(userName===""||passWord===""){
            alert("please enter username and password!");
            return;
        } else{
            userActions.login(userName, passWord).catch(error => {
                //catch the fetch error
                alert(error);
            });
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="media-user">
                    <span className="media-user-icon">
                        <img src={UserIcon} alt=""></img>
                    </span>
                    <input type="text" name="username" className="form-control media-input" placeholder="Username" onChange={handleChange}></input>
                </div>
            </div>
            <div className="form-group">
                <div className="media-user">
                    <span className="media-user-icon">
                        <img src={PwdIcon} alt=""></img>
                    </span>
                    <input type="password" name="pwd" className="form-control media-input" placeholder="Password" onChange={handleChange}></input>
                </div>
            </div>
            <div className="form-group">
                <a href="#" className="form-forgot-link">Forgot password?</a>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary media-button">Sign in</button>
            </div>
        </form>
    );
}
export {Login};